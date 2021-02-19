package com.xinlixue.one.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.xinlixue.one.entity.CacheEntity;
import com.xinlixue.one.entity.ResultSetEntity;
import com.xinlixue.one.entity.SaveResultArg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
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
                resultSetEntity.setQingjing(1);
                resultSetEntity.setPeoples(0);
                resultSetEntity.setFangxiang(peopleMove);
                resultSetEntity.setHuozai(fireUpMoves.get(up));
                up=up+1;
            }else{
                resultSetEntity.setQingjing(2);
                resultSetEntity.setPeoples(0);
                resultSetEntity.setFangxiang(peopleMove);
                resultSetEntity.setHuozai(fireUpMoves.get(down));
                down=down+1;
            }
            resultSetEntityList.add(resultSetEntity);

        }
        return resultSetEntityList;
    }
    public void saveResult(SaveResultArg saveResultArg){}


}
