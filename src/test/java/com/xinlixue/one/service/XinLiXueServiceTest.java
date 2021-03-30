package com.xinlixue.one.service;

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
       // xinLiXueService.getBackValue( );
        System.out.println(xinLiXueService.getTimesResult("pengsh",220));
    }
}