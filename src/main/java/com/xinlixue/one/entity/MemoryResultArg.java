package com.xinlixue.one.entity;

import io.swagger.models.auth.In;

import java.util.List;
import java.util.Map;

/**
 * @Author pengsh
 * @Date: 2021/03/06
 * @Description
 */
public class MemoryResultArg {
    private List<Integer> randomList;
    private List<String> colorList;
    private List<Integer> changeRandomList;
    private List<String> changeColorList;
    private Integer change;

    public List<Integer> getRandomList() {
        return randomList;
    }

    public void setRandomList(List<Integer> randomList) {
        this.randomList = randomList;
    }

    public List<String> getColorList() {
        return colorList;
    }

    public void setColorList(List<String> colorList) {
        this.colorList = colorList;
    }

    public List<Integer> getChangeRandomList() {
        return changeRandomList;
    }

    public void setChangeRandomList(List<Integer> changeRandomList) {
        this.changeRandomList = changeRandomList;
    }

    public List<String> getChangeColorList() {
        return changeColorList;
    }

    public void setChangeColorList(List<String> changeColorList) {
        this.changeColorList = changeColorList;
    }

    public Integer getChange() {
        return change;
    }

    public void setChange(Integer change) {
        this.change = change;
    }

    @Override
    public String toString() {
        return "MemoryResultArg{" +
                "randomList=" + randomList +
                ", colorList=" + colorList +
                ", changeRandomList=" + changeRandomList +
                ", changeColorList=" + changeColorList +
                ", change=" + change +
                '}';
    }
}
