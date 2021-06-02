package com.xinlixue.one.entity;

import java.io.Serializable;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
public class ResultSetEntity implements Serializable {

    private Integer qingjing;
    private Integer peoples;
    private Integer fangxiang;
    private Integer huozai;
    private Integer pingheng;

    public Integer getQingjing() {
        return qingjing;
    }

    public void setQingjing(Integer qingjing) {
        this.qingjing = qingjing;
    }

    public Integer getPeoples() {
        return peoples;
    }

    public void setPeoples(Integer peoples) {
        this.peoples = peoples;
    }

    public Integer getFangxiang() {
        return fangxiang;
    }

    public void setFangxiang(Integer fangxiang) {
        this.fangxiang = fangxiang;
    }

    public Integer getHuozai() {
        return huozai;
    }

    public void setHuozai(Integer huozai) {
        this.huozai = huozai;
    }

    public Integer getPingheng() {
        return pingheng;
    }

    public void setPingheng(Integer pingheng) {
        this.pingheng = pingheng;
    }

    @Override
    public String toString() {
        return "ResultSetEntity{" +
                "qingjing=" + qingjing +
                ", peoples=" + peoples +
                ", fangxiang=" + fangxiang +
                ", huozai=" + huozai +
                ", pingheng=" + pingheng +
                '}';
    }
}
