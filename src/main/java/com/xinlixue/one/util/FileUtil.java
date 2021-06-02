package com.xinlixue.one.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

/**
 * @Author pengsh
 * @Date: 2021/04/24
 * @Description
 */
public class FileUtil {

    public static void writeResultBySub(String sub,String value){
        try{
            String path="/Users/pengshuai/Downloads/"+sub+".txt";
            File file = new File(path);
            FileOutputStream fos = null;
            if(!file.exists()){
                file.createNewFile();//如果文件不存在，就创建该文件
                fos = new FileOutputStream(file);//首次写入获取
            }else{
                //如果文件已存在，那么就在文件末尾追加写入
                fos = new FileOutputStream(file,true);//这里构造方法多了一个参数true,表示在文件末尾追加写入
            }
            OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");//指定以UTF-8格式写入文件

            //遍历list
            osw.write(value+"\r\n");
            //写入完成关闭流
            osw.close();

        }catch (Exception e){
            e.printStackTrace();

        }

    }
}
