package com.xinlixue.one.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.xinlixue.one.entity.CacheEntity;
import com.xinlixue.one.entity.ResultSetEntity;
import com.xinlixue.one.entity.SaveResultArg;
import com.xinlixue.one.entity.UserEntityArg;
import com.xinlixue.one.mapper.XinLiXue2BMapper;
import com.xinlixue.one.mapper.XinLinXueMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * @Author pengsh
 * @Date: 2021/06/01
 * @Description
 */
@Service
public class XinLiXue2BService {
    @Autowired
    private EffectInfoCacheLoader effectInfoCacheLoader;
    private Cache<String, CacheEntity> batchCaffCalCache =null;
    @Autowired
    private XinLiXue2BMapper xinLiXue2BMapper;

    @PostConstruct
    public void init(){
        batchCaffCalCache= Caffeine.newBuilder().expireAfterWrite(60*3, TimeUnit.MINUTES).maximumSize(5000).build(this.effectInfoCacheLoader);
    }

    public ResultSetEntity getCount(String name, Integer count){
        String key="xinlixue2B:"+name;

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
    public void saveResult(SaveResultArg saveResultArg){
        System.out.println("saveResult:"+saveResultArg.toString());
        //获取当前对象的id值
        String sub=saveResultArg.getSub();
        //获取当前对象的实验次数；
        Integer times=saveResultArg.getTimes()-1;
        Integer choose=saveResultArg.getChoose();
        System.out.println(times+"===================================");
        //获取当前试验次数
        Map resultMap=xinLiXue2BMapper.getSaveResult(sub,times-1);
        ResultSetEntity resultSetEntity=getCount(sub,times);
        System.out.println("resultSetEntity:"+resultSetEntity.toString());
        //火灾的位置
        Integer fire=resultSetEntity.getHuozai();
        Integer peoples=resultSetEntity.getPeoples();
        Integer age=saveResultArg.getAge();
        String  sex=saveResultArg.getSex();
        Integer fangxiang=resultSetEntity.getFangxiang();
        Integer huozai=resultSetEntity.getHuozai();
        Integer qingjing=resultSetEntity.getQingjing();
        Integer pinghen=resultSetEntity.getPingheng();
        String costTime=saveResultArg.getCosttime();
        //表示被试和前面的小人移动相同
        int consistently=0;
        if(qingjing==1||qingjing==2||qingjing==7||qingjing==8){
            if(choose==fangxiang){//表示前面选择相同
                consistently=1;
            }
        }
        //说明数据库里面是没有结果 第一次
        if(resultMap==null){
            if(times==0){
                int res=1;
                if(choose.equals(fire)){//如果选择和火灾的位置相等 就表示减一分
                    res=-1;
                }
                System.out.println("1：保存数据库===============================");
                //把结果存入数据库 做insert 操作
                xinLiXue2BMapper.saveResult(sub,age,Integer.valueOf(sex),times,choose,fangxiang,huozai,res,qingjing,res,costTime,peoples,consistently,pinghen);
            } else{
                System.out.println("---1：保存数据库===============================");
            }
        }else{
            int score=1;
            System.out.println("2：保存数据库===============================");
            //获取前一次的数据结果
            Map OldResultMap=xinLiXue2BMapper.getSaveResult(sub,times-1);
            //获取之前的分数
            Integer oldResult=(Integer) OldResultMap.get("result");
            if(choose.equals(fire)){//如果选择和火灾的位置相等 就表示减一分
                score=-1;
                oldResult=oldResult-1;
            }else{
                oldResult=oldResult+1;
            }
            System.out.println("3：保存数据库===============================");
            //把结果存入数据库 做insert 操作
            xinLiXue2BMapper.saveResult(sub,age,Integer.valueOf(sex),times,choose,fangxiang,huozai,oldResult,qingjing,score,costTime,peoples,consistently,pinghen);
        }


    }

    public List<ResultSetEntity> getBackValue(){
        List<ResultSetEntity> resultSetEntityList=new ArrayList<>();

        // 选择情景
        List<Integer> qingjings= Arrays.asList(1,2);
        Collections.shuffle(qingjings);
        //小人的数量
        List<Integer> peoples= Arrays.asList(2,3,4);
        Collections.shuffle(peoples);
        //小人移动的方向24次 8次向上 8次向下 8次中间
        List<Integer> peopleMoves = Arrays.asList(1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3);

        Collections.shuffle(peopleMoves);
        //火灾分布的情况
        //火灾向上分布
        List<Integer> fireUpMoves = Arrays.asList(1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3);
        Collections.shuffle(fireUpMoves);
        ResultSetEntity resultSetEntity =null;
        for(int p1:peoples){
            for(int i=0;i< peopleMoves.size();i++){
                resultSetEntity=new ResultSetEntity();
                resultSetEntity.setQingjing(1);
                resultSetEntity.setFangxiang(peopleMoves.get(i));
                resultSetEntity.setPeoples(p1);
                resultSetEntity.setPingheng(1);
                resultSetEntity.setHuozai(fireUpMoves.get(i));
                resultSetEntityList.add(resultSetEntity);

            }
        }
        for(int p1:peoples){
            for(int i=0;i< peopleMoves.size();i++){
                resultSetEntity=new ResultSetEntity();
                resultSetEntity.setQingjing(3);
                resultSetEntity.setFangxiang(peopleMoves.get(i));
                resultSetEntity.setPeoples(p1);
                resultSetEntity.setPingheng(1);
                resultSetEntity.setHuozai(fireUpMoves.get(i));
                resultSetEntityList.add(resultSetEntity);

            }
        }
        List<Integer> pinghenList=Arrays.asList(1,2);
        //小人移动的方向24次 8次向上 8次向下 8次中间
        List<Integer> peopleMoves2 = Arrays.asList(1,2,3,1,2,3,1,2,3,1,2,3);

        Collections.shuffle(peopleMoves2);
        //火灾分布的情况
        //火灾向上分布
        List<Integer> fireUpMoves2 = Arrays.asList(1,2,3,1,2,3,1,2,3,1,2,3);
        Collections.shuffle(fireUpMoves2);
        for(int ping:pinghenList){
        for(int p1:peoples){
            for(int i=0;i< peopleMoves.size();i++){
                resultSetEntity=new ResultSetEntity();
                resultSetEntity.setQingjing(2);
                resultSetEntity.setFangxiang(peopleMoves2.get(i));
                resultSetEntity.setPeoples(p1);
                resultSetEntity.setPingheng(ping);
                resultSetEntity.setHuozai(fireUpMoves2.get(i));
                resultSetEntityList.add(resultSetEntity);

            }
        }
        }
        for(int i=0;i< 23;i++){
            resultSetEntity=new ResultSetEntity();
            resultSetEntity.setQingjing(4);
            resultSetEntity.setFangxiang(1);
            resultSetEntity.setPeoples(2);
            resultSetEntity.setPingheng(1);
            resultSetEntity.setHuozai(3);
            resultSetEntityList.add(resultSetEntity);

        }

        return resultSetEntityList;

    }

    public Integer getTimesResult(String sub,Integer times){
        /**
         * 当实验达到一定的次数 返回总的结果
         */
        if(times>=220){
            List<Integer> resuleList=Arrays.asList(120,121,122,123,124,125,126,127,128,129,130);
            Collections.shuffle(resuleList);
            //当前的结果写入文件当中

            return resuleList.get(0);
        }
        Map resultMap=xinLiXue2BMapper.getTimesResultById(sub,times-1);
        if(resultMap==null||resultMap.size()==0){
            return 0;
        }
        return (Integer) resultMap.getOrDefault("result",0);

    }

    public void login(UserEntityArg userEntityArg){
        //获取当前被试的编号
        String sub=userEntityArg.getSub();
        Integer age=userEntityArg.getAge();
        Integer sex=userEntityArg.getSex();
        int flag=xinLiXue2BMapper.login(sub,age,sex);
        System.out.println("用户注册成功："+sub);
    }
    public void writeResult2Txt(String sub){
        try{
            String path="/Users/pengshuai/Downloads/"+sub+".txt";
            // 获取当前所有数据测试人员的所有数据
            List<Map<String,Object>> resultMapList=xinLiXue2BMapper.getSaveResulAll(sub);
            BufferedWriter writer = new BufferedWriter(new FileWriter(path));
            boolean flag=true;
            for (Map<String,Object> info :resultMapList) {
                if(flag){
                    writer.write(info.keySet().toString() + "\r\n");
                }
                StringBuffer sb=new StringBuffer();
                String tep="";
                for(Map.Entry<String,Object> entry:info.entrySet()){
                    sb.append(entry.getValue()).append("\t");
                }

                writer.write(sb.toString() + "\r\n");
                flag=false;
            }
            writer.flush();
            writer.close();
        }catch (Exception e){
            System.out.println("写入文件出错："+sub);
            System.out.println(e.getMessage());
        }


    }

}
