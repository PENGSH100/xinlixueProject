package com.xinlixue.one.service;

import com.xinlixue.one.entity.MemoryResultArg;
import com.xinlixue.one.entity.SaveResultTwoArg;
import com.xinlixue.one.mapper.XinLinXueMapper;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * @Author pengsh
 * @Date: 2021/03/06
 * @Description
 */
@Service
public class XinliXueTwoService {
    @Autowired
    XinLinXueMapper xinLinXueMapper;
    public MemoryResultArg getSuffleArray(){
        MemoryResultArg memoryResultArg=new MemoryResultArg();
        List<Integer> randomList=Arrays.asList(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
        Collections.shuffle(randomList);
        List<String> colorList= Arrays.asList("blue","red","green","yellow","brown","magenta","lime","cyan");
        Collections.shuffle(colorList);
        //随机取五个randomlist的值 使 对应页面的方块显示颜色
        List<Integer> randomResultList=new ArrayList<>();
        List<String> colorResultList=new ArrayList<>();
        for(int i=0;i<5;i++){
            randomResultList.add(randomList.get(i));
            colorResultList.add(colorList.get(i));
        }
        memoryResultArg.setColorList(colorResultList);
        memoryResultArg.setRandomList(randomResultList);
        List<String> changeColorList=new ArrayList<String>(colorResultList);
        //随机改变一个颜色
        Random rand = new Random();
        int change=rand.nextInt(5);
        int changecolor=rand.nextInt(2);
        //改变颜色的结果集
        changeColorList.set(change,colorList.get(changecolor+5));
        memoryResultArg.setChangeColorList(changeColorList);
        memoryResultArg.setChangeRandomList(randomResultList);
        memoryResultArg.setChange(randomResultList.get(change));
        return memoryResultArg;
    }
    public void saveChange(SaveResultTwoArg saveResultTwoArg){
        System.out.println("SaveResultTwoArg:"+saveResultTwoArg.toString());
        //保存被试的选择结果 并且按照对应的规则进行积分
        String sub=saveResultTwoArg.getSub();
        Integer choose=saveResultTwoArg.getChoose();
        Integer change=saveResultTwoArg.getChange();
        Integer age=saveResultTwoArg.getAge();
        Integer sex=saveResultTwoArg.getSex();
        int result=0;
        if(change.equals(choose)){
            result=1;
        }
        xinLinXueMapper.saveResultTwo(sub,change,choose,result,sex,age);

    }

}
