package com.xinlixue.one.entity;

import java.io.Serializable;

/**
 * @Author pengsh
 * @Date: 2021/02/19
 * @Description
 */
public class SaveResultArg implements Serializable {
    private static final long SerializableId=1l;
    private String name;
    private String  sex;
    private Integer choose;
    private Integer age;
    private Integer id;
    private Integer times;

    public Integer getTimes() {
        return times;
    }

    public void setTimes(Integer times) {
        this.times = times;
    }

    public static long getSerializableId() {
        return SerializableId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getChoose() {
        return choose;
    }

    public void setChoose(Integer choose) {
        this.choose = choose;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "SaveResultArg{" +
                "name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", choose=" + choose +
                ", age=" + age +
                ", id=" + id +
                ", times=" + times +
                '}';
    }
}
