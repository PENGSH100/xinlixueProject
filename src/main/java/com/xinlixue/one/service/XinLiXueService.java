package com.xinlixue.one.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.xinlixue.one.entity.CacheEntity;
import com.xinlixue.one.entity.ResultSetEntity;
import com.xinlixue.one.entity.SaveResultArg;
import com.xinlixue.one.mapper.XinLinXueMapper;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.beans.IntrospectionException;
import java.sql.ResultSet;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
@Service
public class XinLiXueService {
    @Autowired
    private EffectInfoCacheLoader effectInfoCacheLoader;
    private Cache<String, CacheEntity> batchCaffCalCache =null;
    @Autowired
    private XinLinXueMapper xinLinXueMapper;

    @PostConstruct
    public void init(){
        batchCaffCalCache= Caffeine.newBuilder().expireAfterWrite(60*3, TimeUnit.MINUTES).maximumSize(5000).build(this.effectInfoCacheLoader);
    }
    public ResultSetEntity getCount(String name,Integer count){
        String key="xinlixue:"+name;

        CacheEntity cacheEntity=this.batchCaffCalCache.getIfPresent(key);
        if(cacheEntity==null){
            System.out.println("没有使用缓存");
            cacheEntity=new CacheEntity();
            List<ResultSetEntity> resultSetEntityList=getBackValue();
            cacheEntity.setResultSetEntityList(resultSetEntityList);
            cacheEntity.setKey(key);
            this.batchCaffCalCache.put(key,cacheEntity);
            return resultSetEntityList.get(count);
        }else {
            System.out.println("使用缓存");
           return cacheEntity.getResultSetEntityList().get(count);
        }
    }
    public List<ResultSetEntity> getBackValue(){

        List<ResultSetEntity> resultSetEntityList=new ArrayList<>();
        // 选择情景
        List<Integer> qingjings= Arrays.asList(1);
        Collections.shuffle(qingjings);
        //小人的数量
        List<Integer> peoples= Arrays.asList(1);
        Collections.shuffle(peoples);
        //小人移动的方向20次 10次向上 10次向下
        List<Integer> peopleMoves = Arrays.asList(1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2);
        Collections.shuffle(peopleMoves);
        //火灾分布的情况
        //火灾向上分布
        List<Integer> fireUpMoves = Arrays.asList(1, 2, 1, 2, 1, 2, 1, 2, 1, 2);
        Collections.shuffle(fireUpMoves);
        //将数据写入数据库 用于下次调用
        ResultSetEntity resultSetEntity=null;
        for(Integer qinjin:qingjings){
            for(Integer people:peoples){
                int up = 0;
                int down = 0;
                for(Integer peopleMove:peopleMoves){
                    resultSetEntity=new ResultSetEntity();
                    if(peopleMove==1){
                        resultSetEntity.setQingjing(qinjin);
                        resultSetEntity.setPeoples(people);
                        resultSetEntity.setFangxiang(peopleMove);
                        resultSetEntity.setHuozai(fireUpMoves.get(up));
                        up=up+1;
                    }else{
                        resultSetEntity.setQingjing(qinjin);
                        resultSetEntity.setPeoples(people);
                        resultSetEntity.setFangxiang(peopleMove);
                        resultSetEntity.setHuozai(fireUpMoves.get(down));
                        down=down+1;
                    }
                    resultSetEntityList.add(resultSetEntity);

                }
            }
        }
        int up = 0;
        int down = 0;
        for(Integer peopleMove:peopleMoves){
            resultSetEntity=new ResultSetEntity();
            if(peopleMove==1){
                resultSetEntity.setQingjing(3);
                resultSetEntity.setPeoples(0);
                resultSetEntity.setFangxiang(peopleMove);
                resultSetEntity.setHuozai(fireUpMoves.get(up));
                up=up+1;
            }else{
                resultSetEntity.setQingjing(3);
                resultSetEntity.setPeoples(0);
                resultSetEntity.setFangxiang(peopleMove);
                resultSetEntity.setHuozai(fireUpMoves.get(down));
                down=down+1;
            }
            resultSetEntityList.add(resultSetEntity);

        }
        int j=4;
        while (j<2){
            List<Integer> peoples1= Arrays.asList(1,2);
            List<Integer> peoples2= Arrays.asList(1,2);
            Collections.shuffle(peoples1);
            Collections.shuffle(peoples2);
            ResultSetEntity r1=null;
            for(int i=0;i<2;i++){
                r1=new ResultSetEntity();
                r1.setQingjing(4);
                r1.setPeoples(2);
                r1.setFangxiang(peoples1.get(i));
                r1.setHuozai(peoples2.get(i));
                resultSetEntityList.add(r1);
            }
            List<Integer> peoples3= Arrays.asList(1,2,3,4);
            List<Integer> peoples4= Arrays.asList(1,2,1,2);
            Collections.shuffle(peoples1);
            Collections.shuffle(peoples2);
            ResultSetEntity r2=null;
            for(int i=0;i<4;i++){
                r2=new ResultSetEntity();
                r2.setQingjing(5);
                r2.setPeoples(3);
                r2.setFangxiang(peoples3.get(i));
                r2.setHuozai(peoples4.get(i));
                resultSetEntityList.add(r2);
            }
            List<Integer> peoples5= Arrays.asList(1,2,3,4,5,6);
            List<Integer> peoples6= Arrays.asList(1,2,1,2,1,2);
            Collections.shuffle(peoples1);
            Collections.shuffle(peoples2);
            ResultSetEntity r3=null;
            for(int i=0;i<6;i++){
                r3=new ResultSetEntity();
                r3.setQingjing(6);
                r3.setPeoples(4);
                r3.setFangxiang(peoples5.get(i));
                r3.setHuozai(peoples6.get(i));
                resultSetEntityList.add(r3);
            }
            j++;
        }

        Collections.shuffle(resultSetEntityList);
        System.out.println("场景数量："+resultSetEntityList.size());
        return resultSetEntityList;
    }
    public void saveResult(SaveResultArg saveResultArg){
        System.out.println(saveResultArg.toString());
        //获取当前对象的id值
        Integer id=saveResultArg.getId();
        //获取当前对象的实验次数；
        Integer times=saveResultArg.getTimes();
        Integer choose=saveResultArg.getChoose();
        Map resultMap=xinLinXueMapper.getSaveResult(id);
        ResultSetEntity resultSetEntity=getCount(id.toString(),times);
        //火灾的位置
        Integer fire=resultSetEntity.getHuozai();
        //说明数据库里面是没有结果 第一次
        if(resultMap==null||resultMap.size()==0){
            int res=1;
            if(choose.equals(fire)){//如果选择和火灾的位置相等 就表示减一分
                res=-1;
            }
            //把结果存入数据库 做insert 操作
            xinLinXueMapper.saveResult(id,times,res);
        }else{
            Integer oldTimes=(Integer) resultMap.get("times");
            //获取之前的分数
            Integer oldResult=(Integer) resultMap.get("result");
            //判断当前的次数和之前的次数是不是一致的
            if(!times.equals(oldTimes)){
                if(choose.equals(fire)){//如果选择和火灾的位置相等 就表示减一分
                    oldResult=oldResult-1;
                }else{
                    oldResult=oldResult+1;
                }
                //把结果存入数据库 update 操作
                xinLinXueMapper.updateResult(id,times,oldResult);
            }
        }


    }

    public Integer getTimesResult(Integer id){
        Map resultMap=xinLinXueMapper.getTimesResultById(id);
        if(resultMap==null||resultMap.size()==0){
            return 0;
        }
        return (Integer) resultMap.getOrDefault("result",0);

    }


}
