package com.xinlixue.one.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

/**
 * @Author pengsh
 * @Date: 2021/03/06
 * @Description
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class XinliXueTwoServiceTest {
    @Autowired
    XinliXueTwoService xinliXueTwoService;

    @Test
    public void getSuffleArray() {
        System.out.println(xinliXueTwoService.getSuffleArray());
    }
}