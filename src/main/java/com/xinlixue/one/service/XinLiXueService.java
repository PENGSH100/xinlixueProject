package com.xinlixue.one.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.xinlixue.one.entity.CacheEntity;
import com.xinlixue.one.entity.ResultSetEntity;
import com.xinlixue.one.entity.SaveResultArg;
import com.xinlixue.one.entity.UserEntityArg;
import com.xinlixue.one.mapper.XinLinXueMapper;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.beans.IntrospectionException;
import java.io.BufferedWriter;
import java.io.FileWriter;
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
            List<ResultSetEntity> resultSetEntityList=getBackValueThree();
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
        List<Integer> qingjings= Arrays.asList(1,2);
        Collections.shuffle(qingjings);
        //小人的数量
        List<Integer> peoples= Arrays.asList(1,2,3,4);
        Collections.shuffle(peoples);
        //小人移动的方向20次 10次向上 10次向下
        List<Integer> peopleMoves = Arrays.asList(1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2);
        //List<Integer> peopleMoves = Arrays.asList( 2, 2,  2,  2,  2,  2,   2,   2,   2,   2);

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
        //基线条件 没有人员移动
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
        //填充次数
        int j=0;
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

        ResultSetEntity r4=null;
        List<Integer> peoples7= Arrays.asList(1,2);
        Collections.shuffle(peoples7);
        for(int i=1;i<=4;i++){
            for(int x =1;x<=2;x++){
                r4=new ResultSetEntity();
                r4.setQingjing(7);
                r4.setPeoples(i);
                r4.setFangxiang(x);
                r4.setHuozai(peoples7.get(x-1));
                resultSetEntityList.add(r4);
            }
        }
        //List<Integer> peoples7= Arrays.asList(1,2);
        ResultSetEntity r5=null;
        Collections.shuffle(peoples7);
        for(int i=1;i<=4;i++){
            for(int x =1;x<=2;x++){
                r5=new ResultSetEntity();
                r5.setQingjing(8);
                r5.setPeoples(i);
                r5.setFangxiang(x);
                r5.setHuozai(peoples7.get(x-1));
                resultSetEntityList.add(r5);
            }
        }

        Collections.shuffle(resultSetEntityList);
        System.out.println("场景数量："+resultSetEntityList.size());
        return resultSetEntityList;
    }
    public List<ResultSetEntity> getBackValueThree(){

        List<ResultSetEntity> resultSetEntityList=new ArrayList<>();
        // 选择情景
        List<Integer> qingjings= Arrays.asList(1,2);
        Collections.shuffle(qingjings);
        //小人的数量
        List<Integer> peoples= Arrays.asList(1,2,3,4);
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
        //基线条件 没有人员移动
        int up = 0;
        int down = 0;
        for(Integer peopleMove:peopleMoves){
            resultSetEntity=new ResultSetEntity();
            resultSetEntity.setQingjing(3);
            resultSetEntity.setPeoples(0);
            resultSetEntity.setFangxiang(peopleMove);
            resultSetEntity.setHuozai(1);
            up=up+1;
            resultSetEntityList.add(resultSetEntity);
        }
        // 选择情景
        List<Integer> qingjing2= Arrays.asList(4,5);
        Collections.shuffle(qingjing2);
        //小人的数量
        List<Integer> peoples2= Arrays.asList(1,2,3,4);
        Collections.shuffle(peoples2);
        //小人移动的方向20次 10次向上 10次向下
        List<Integer> peopleMoves2 = Arrays.asList(1, 2);
        Collections.shuffle(peopleMoves2);
        //火灾分布的情况
        //火灾向上分布
        List<Integer> fireUpMoves2 = Arrays.asList(1, 2);
        Collections.shuffle(fireUpMoves2);
        ResultSetEntity r3=null;
        for(int qinjing:qingjing2){
            for(int p:peoples2){
                int fire=0;
                for (int pm:peopleMoves2){
                    r3=new ResultSetEntity();
                    r3.setQingjing(qinjing);
                    r3.setPeoples(p);
                    r3.setFangxiang(pm);
                    r3.setHuozai(fireUpMoves2.get(fire));
                    fire++;
                    resultSetEntityList.add(r3);
                }

            }
        }
        // 选择情景
        List<Integer> qingjing3= Arrays.asList(6,7);
        Collections.shuffle(qingjing3);
        //小人的数量
        List<Integer> peoples3= Arrays.asList(1,2,3);
        Collections.shuffle(peoples3);
        Collections.shuffle(peopleMoves2);
        for(int qinjing:qingjing3){
            for(int p:peoples3){
                int fire=0;
                for (int pm:peopleMoves2){
                    r3=new ResultSetEntity();
                    r3.setQingjing(qinjing);
                    r3.setPeoples(p);
                    r3.setFangxiang(pm);
                    r3.setHuozai(fireUpMoves2.get(fire));
                    fire++;
                    resultSetEntityList.add(r3);
                }

            }
        }
        // 选择情景
        List<Integer> qingjing4= Arrays.asList(8,9);
        Collections.shuffle(qingjing4);
        //小人的数量
        List<Integer> peoples4= Arrays.asList(1,2);
        Collections.shuffle(peoples4);
        for(int qinjing:qingjing4){
            for(int p:peoples4){
                int fire=0;
                for (int pm:peopleMoves2){
                    r3=new ResultSetEntity();
                    r3.setQingjing(qinjing);
                    r3.setPeoples(p);
                    r3.setFangxiang(pm);
                    r3.setHuozai(fireUpMoves2.get(fire));
                    fire++;
                    resultSetEntityList.add(r3);
                }

            }
        }
        // 选择情景
        List<Integer> qingjing5= Arrays.asList(10,11);
        Collections.shuffle(qingjing5);
        //小人的数量
        List<Integer> peoples5= Arrays.asList(1);
        Collections.shuffle(peoples5);
        for(int qinjing:qingjing5){
            for(int p:peoples5){
                int fire=0;
                for (int pm:peopleMoves2){
                    r3=new ResultSetEntity();
                    r3.setQingjing(qinjing);
                    r3.setPeoples(p);
                    r3.setFangxiang(pm);
                    r3.setHuozai(fireUpMoves2.get(fire));
                    fire++;
                    resultSetEntityList.add(r3);
                }

            }
        }
        Collections.shuffle(resultSetEntityList);
        System.out.println("场景数量："+resultSetEntityList.size());
        return resultSetEntityList;
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
        Map resultMap=xinLinXueMapper.getSaveResult(sub,times-1);
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
                xinLinXueMapper.saveResult(sub,age,Integer.valueOf(sex),times,choose,fangxiang,huozai,res,qingjing,res,costTime,peoples,consistently);
            } else{
                System.out.println("---1：保存数据库===============================");
            }
        }else{
            int score=1;
            System.out.println("2：保存数据库===============================");
            //获取前一次的数据结果
            Map OldResultMap=xinLinXueMapper.getSaveResult(sub,times-1);
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
            xinLinXueMapper.saveResult(sub,age,Integer.valueOf(sex),times,choose,fangxiang,huozai,oldResult,qingjing,score,costTime,peoples,consistently);
        }


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
        Map resultMap=xinLinXueMapper.getTimesResultById(sub,times-1);
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
        int flag=xinLinXueMapper.login(sub,age,sex);
        System.out.println("用户注册成功："+sub);
    }
    public void writeResult2Txt(String sub){
        try{
            String path="/Users/pengshuai/Downloads/"+sub+".txt";
            // 获取当前所有数据测试人员的所有数据
            List<Map<String,Object>> resultMapList=xinLinXueMapper.getSaveResulAll(sub);
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
