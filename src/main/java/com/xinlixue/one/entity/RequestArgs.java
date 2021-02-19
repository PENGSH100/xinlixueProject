package com.xinlixue.one.entity;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
public class RequestArgs {
    private String name;
    private Integer count;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "RequestArgs{" +
                "name='" + name + '\'' +
                ", count=" + count +
                '}';
    }
}
