package com.xinlixue.one.controller;

import com.alibaba.fastjson.JSON;
import com.xinlixue.one.entity.MemoryResultArg;
import com.xinlixue.one.entity.SaveResultTwoArg;
import com.xinlixue.one.http.HttpResponseResult;
import com.xinlixue.one.service.XinliXueTwoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Author pengsh
 * @Date: 2021/03/06
 * @Description
 */
@Controller
@RequestMapping("/xinlixue2")
public class XinliXueTwoController {
    @Autowired
    XinliXueTwoService xinliXueTwoService;

    @RequestMapping(value = "/ping")
    @ResponseBody
    public HttpResponseResult<String> clear() {
        HttpResponseResult responseResult = new HttpResponseResult();
        responseResult.setErrCode(200);
        responseResult.setResult("xinlixue2 启动成功..........");

        return responseResult;
    }

    @RequestMapping(value = "/pictureFills")
    @ResponseBody
    public HttpResponseResult<JSON> getPictureFills() {
        HttpResponseResult responseResult = new HttpResponseResult();
        try {
            MemoryResultArg memoryResultArg=xinliXueTwoService.getSuffleArray();
            responseResult.setResult(JSON.toJSON(memoryResultArg));
        }catch (Exception e){
            responseResult.setErrCode(500);
            responseResult.setErrMessage(e.getMessage());
        }
        return responseResult;
    }
    @RequestMapping(value = "/saveResultTwo", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE}, method = RequestMethod.POST)
    @ResponseBody
    public HttpResponseResult<JSON> saveResult(@RequestBody String bodyJson) {
        HttpResponseResult responseResult = new HttpResponseResult();
        try {
            System.out.println("saveResultTwo json:"+bodyJson);
            SaveResultTwoArg saveResultTwoArg= JSON.parseObject(bodyJson, SaveResultTwoArg.class);
            xinliXueTwoService.saveChange(saveResultTwoArg);
        }catch (Exception e){
            System.out.println("保存结果出错了。。。。。。。。。。"+e);
            responseResult.setErrCode(500);
            responseResult.setErrMessage(e.getMessage());
        }
        return responseResult;
    }
}
