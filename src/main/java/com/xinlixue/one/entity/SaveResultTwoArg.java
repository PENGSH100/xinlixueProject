package com.xinlixue.one.entity;

/**
 * @Author pengsh
 * @Date: 2021/03/06
 * @Description
 */
public class SaveResultTwoArg {
    private Integer choose;
    private Integer change;
    private Integer age;
    private Integer sex;
    private String sub;
    private Integer times;

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

    public Integer getChoose() {
        return choose;
    }

    public void setChoose(Integer choose) {
        this.choose = choose;
    }

    public Integer getChange() {
        return change;
    }

    public void setChange(Integer change) {
        this.change = change;
    }

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public Integer getTimes() {
        return times;
    }

    public void setTimes(Integer times) {
        this.times = times;
    }

    @Override
    public String toString() {
        return "SaveResultTwoArg{" +
                "choose=" + choose +
                ", change=" + change +
                ", age=" + age +
                ", sex=" + sex +
                ", sub='" + sub + '\'' +
                ", times=" + times +
                '}';
    }
}
