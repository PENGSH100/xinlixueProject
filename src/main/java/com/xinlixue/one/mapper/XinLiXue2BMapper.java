package com.xinlixue.one.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 * @Author pengsh
 * @Date: 2021/06/01
 * @Description
 */
@Mapper
public interface XinLiXue2BMapper {
    @Select("select * from user_result_2B where sub=#{sub}")
    List<Map<String,Object>> getSaveResulAll(@Param("sub") String sub);

    @Insert("insert into org_employee_user (sub,age,sex) values ( #{sub},${age},${sex})")
    int login(@Param("sub") String sub,
              @Param("age") Integer age,
              @Param("sex") Integer sex);
    @Select("select id,times,result from user_result__2B where sub=#{sub} and times=#{times}")
    Map getTimesResultById(@Param("sub") String sub,@Param("times") Integer times);


    @Insert("INSERT INTO user_result_2B (sub,age,sex,times,choose,fangxiang,huozai,result,score,qingjing,costtime,peoples,consistently,pinghen) " +
            "values (#{sub},${age},${sex},${times},${choose},${fangxiang},${huozai},${result},${score},${qingjing},#{costtime},#{peoples},#{consistently},,#{consistently})")
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
                   @Param("consistently") Integer consistently,
                   @Param("pinghen") Integer pinghen);

    @Select("select times,result from user_result_2B where sub=#{sub} and times=#{times}")
    Map getSaveResult(@Param("sub") String sub,@Param("times") Integer times);

}
