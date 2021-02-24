package com.xinlixue.one.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class XinLinXueMapperTest {
    @Autowired(required = false)
    XinLinXueMapper xinLinXueMapper;

    @Test
    public void getAll() {
        System.out.println(xinLinXueMapper);
        //List<Map> allMap=xinLinXueMapper.getAll();
        //System.out.println(allMap.size());
        xinLinXueMapper.login("pengsh",13,2);


    }
}