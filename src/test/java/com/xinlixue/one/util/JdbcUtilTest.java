package com.xinlixue.one.util;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
public class JdbcUtilTest {
    @Test
    public void testGetConn(){
        try {
            System.out.println(JdbcUtil.getConn());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}