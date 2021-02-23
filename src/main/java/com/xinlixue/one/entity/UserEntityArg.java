package com.xinlixue.one.entity;

import java.io.Serializable;

/**
 * @Author pengsh
 * @Date: 2021/02/23
 * @Description
 */
public class UserEntityArg implements Serializable {
    private String sub;
    private Integer age;
    private Integer sex;

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "UserEntityArg{" +
                "sub='" + sub + '\'' +
                ", age=" + age +
                ", sex=" + sex +
                '}';
    }
}
