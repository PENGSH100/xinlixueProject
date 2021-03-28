package com.xinlixue.one.util;

import java.io.File;
import java.io.FileInputStream;
import java.sql.*;
import java.util.Properties;

/**
 * @Author pengsh
 * @Date: 2021/02/17
 * @Description
 */
public class JdbcUtil {
    private static String url;
    private static String user;
    private static String password;
    private static String driver;

    public static Connection getConn() throws Exception{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/xinlixue?characterEncoding=utf8&useSSL=false&allowPublicKeyRetrieval=true", "root", "root");

        return connection;
    }
    public static void close(ResultSet resultSet, PreparedStatement preparedStatement,
                             Connection connection){
        try {
            if (resultSet != null) {
                resultSet.close();
            }
            if(preparedStatement != null ){
                preparedStatement.close();
            }
            if(connection != null ){
                connection.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException();
        }
    }


}
