package com.xinlixue.one.mapper;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 * @Author pengsh
 * @Date: 2021/02/17
 * @Description
 */
@Mapper
public interface XinLinXueMapper{

    @Select("select * from org_employee_user")
    List<Map> getAll();
    @Select("select times,result from user_result where sub=#{sub} and times=#{times}")
    Map getSaveResult(@Param("sub") String sub,@Param("times") Integer times);

    @Insert("INSERT INTO user_result (sub,age,sex,times,choose,fangxiang,huozai,result,score,qingjing,costtime,peoples,consistently) " +
            "values (#{sub},${age},${sex},${times},${choose},${fangxiang},${huozai},${result},${score},${qingjing},#{costtime},#{peoples},#{consistently})")
    int saveResult(@Param("sub") String id,
                   @Param("age") Integer age,
                   @Param("sex") Integer sex,
                   @Param("times") Integer times,
                   @Param("choose") Integer choose,
                   @Param("fangxiang") Integer fangxiang,
                   @Param("huozai") Integer huozai,
                   @Param("result") Integer result,
                   @Param("qingjing") Integer qinjing,
                   @Param("score") Integer score,
                   @Param("costtime") String costtime,
                   @Param("peoples") Integer peoples,
                   @Param("consistently") Integer consistently);
    @Insert("Update user_result set sub=#{sub} , times=#{times} , result=#{result}")
    int updateResult(@Param("sub") Integer sub,
                   @Param("times") Integer times,
                   @Param("result") Integer result);

    @Select("select id,times,result from user_result where sub=#{sub} and times=#{times}")
    Map getTimesResultById(@Param("sub") String sub,@Param("times") Integer times);

    /**
     *
     * @param sub
     * @return
     */
    @Select("select Sum(score) as result from user_result where sub=#{sub}")
    Map getTimesResultByIdSum(@Param("sub") String sub);

    @Insert("insert into org_employee_user (sub,age,sex) values ( #{sub},${age},${sex})")
    int login(@Param("sub") String sub,
              @Param("age") Integer age,
              @Param("sex") Integer sex);
    @Insert("insert into user_two_result (sub,changes,choose,result,age,sex) values ( #{sub},${change},${choose},${result},${age},${sex})")
    int saveResultTwo(@Param("sub") String sub,
              @Param("change") Integer change,
              @Param("choose") Integer choose,
              @Param("result") Integer result,
              @Param("sex") Integer sex,
              @Param("age") Integer age);



    @Select("select * from user_result where sub=#{sub}")
    List<Map<String,Object>> getSaveResulAll(@Param("sub") String sub);

}
