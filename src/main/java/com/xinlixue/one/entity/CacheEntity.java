package com.xinlixue.one.entity;

import java.util.List;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
public class CacheEntity {
    private String key;
    private List<ResultSetEntity> resultSetEntityList;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public List<ResultSetEntity> getResultSetEntityList() {
        return resultSetEntityList;
    }

    public void setResultSetEntityList(List<ResultSetEntity> resultSetEntityList) {
        this.resultSetEntityList = resultSetEntityList;
    }

    @Override
    public String toString() {
        return "CacheEntity{" +
                "key='" + key + '\'' +
                ", resultSetEntityList=" + resultSetEntityList +
                '}';
    }
}
