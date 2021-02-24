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
    @Select("select times,result from user_result where id=#{id} and times=#{times}")
    Map getSaveResult(@Param("id") Integer id,@Param("times") Integer times);

    @Insert("INSERT INTO user_result (id,age,sex,times,choose,fangxiang,huozai,result) values (${id},${times},${result})")
    int saveResult(@Param("id") Integer id,
                   @Param("age") Integer age,
                   @Param("sex") Integer sex,
                   @Param("times") Integer times,
                   @Param("choose") Integer choose,
                   @Param("fangxiang") Integer fangxiang,
                   @Param("huozai") Integer huozai,
                   @Param("result") Integer result);
    @Insert("Update user_result set id=#{id} , times=#{times} , result=#{result}")
    int updateResult(@Param("id") Integer id,
                   @Param("times") Integer times,
                   @Param("result") Integer result);

    @Select("select id,times,result from user_result where id=#{id}")
    Map getTimesResultById(@Param("id") Integer id);

    @Insert("insert into org_employee_user (sub,age,sex) values ( #{sub},${age},${sex})")
    int login(@Param("sub") String sub,
              @Param("age") Integer age,
              @Param("sex") Integer sex);

}
