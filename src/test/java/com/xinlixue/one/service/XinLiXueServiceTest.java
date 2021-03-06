package com.xinlixue.one.service;

import com.xinlixue.one.entity.SaveResultArg;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class XinLiXueServiceTest {
    @Autowired
    XinLiXueService xinLiXueService;

    @Test
    public void getBackValue() {
        xinLiXueService.getBackValue( );
    }
    @Test
    public void testSaveResult(){
        SaveResultArg saveResultArg=new SaveResultArg();
        saveResultArg.setAge(21);
        saveResultArg.setSex("2");
        saveResultArg.setChoose(1);
        saveResultArg.setSub("hh");
        saveResultArg.setTimes(1);
        xinLiXueService.saveResult(saveResultArg);


    }
}