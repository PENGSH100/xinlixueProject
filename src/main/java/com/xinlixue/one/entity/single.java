package com.xinlixue.one.entity;

/**
 * @Author pengsh
 * @Date: 2021/03/24
 * @Description
 */
public class single {
    private static single instance;
    public single(){

    }

    public static single getInstance() {
        if(instance==null){
            synchronized (single.class){
                if (instance==null){
                    instance=new single();
                }
            }
        }
        return instance;
    }
}
