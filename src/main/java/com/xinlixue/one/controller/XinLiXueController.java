package com.xinlixue.one.controller;

import com.alibaba.fastjson.JSON;
import com.xinlixue.one.entity.RequestArgs;
import com.xinlixue.one.entity.ResultSetEntity;
import com.xinlixue.one.entity.SaveResultArg;
import com.xinlixue.one.entity.UserEntityArg;
import com.xinlixue.one.http.HttpResponseResult;
import com.xinlixue.one.service.XinLiXueService;
import io.swagger.models.auth.In;
import jdk.nashorn.internal.objects.annotations.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.*;


/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
@Controller
@RequestMapping("/xinlixue")
public class XinLiXueController {
    @Autowired
    XinLiXueService xinLiXueService;
    @RequestMapping(value = "/ping")
    @ResponseBody
    public HttpResponseResult<String> clear() {
        HttpResponseResult responseResult = new HttpResponseResult();
        responseResult.setErrCode(200);
        responseResult.setResult("启动成功");

        return responseResult;
    }
    @RequestMapping(value = "/count", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE}, method = RequestMethod.POST)
    @ResponseBody
    public HttpResponseResult<JSON> aggBillBoardExec(@RequestBody String bodyJson) {
        HttpResponseResult responseResult = new HttpResponseResult();
        try {
            RequestArgs requestArgs= JSON.parseObject(bodyJson, RequestArgs.class);
            String name=requestArgs.getName();
            Integer count=requestArgs.getCount();
            System.out.println(requestArgs.toString());
        ResultSetEntity resultSetEntity=xinLiXueService.getCount(name,count);
        responseResult.setResult(JSON.toJSON(resultSetEntity));
    }catch (Exception e){
            responseResult.setErrCode(500);
            responseResult.setErrMessage(e.getMessage());
    }
        return responseResult;
    }

    @RequestMapping(value = "/saveResult", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE}, method = RequestMethod.POST)
    @ResponseBody
    public HttpResponseResult<JSON> saveResult(@RequestBody String bodyJson) {
        HttpResponseResult responseResult = new HttpResponseResult();
        try {
            System.out.println(bodyJson);
            SaveResultArg saveResultArg= JSON.parseObject(bodyJson, SaveResultArg.class);
            xinLiXueService.saveResult(saveResultArg);
            responseResult.setResult(JSON.toJSON(saveResultArg));
        }catch (Exception e){
            System.out.println("出错了。。。。。。。。。。"+e.getMessage());
            responseResult.setErrCode(500);
            responseResult.setErrMessage(e.getMessage());
        }
        return responseResult;
    }
    @RequestMapping(value = "/getTimesResult", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE}, method = RequestMethod.POST)
    @ResponseBody
    public HttpResponseResult<JSON> getTimesResult(@RequestBody String bodyJson) {
        HttpResponseResult responseResult = new HttpResponseResult();
        try {
            System.out.println(bodyJson);
            SaveResultArg saveResultArg= JSON.parseObject(bodyJson, SaveResultArg.class);
            Integer res=xinLiXueService.getTimesResult(saveResultArg.getId());
            responseResult.setResult(JSON.toJSON(res));
        }catch (Exception e){
            System.out.println("出错了。。。。。。。。。。"+e.getMessage());
            responseResult.setErrCode(500);
            responseResult.setErrMessage(e.getMessage());
        }
        return responseResult;
    }
    @RequestMapping(value = "/login", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE}, method = RequestMethod.POST)
    @ResponseBody
    public HttpResponseResult<JSON> login(@RequestBody String bodyJson) {
        HttpResponseResult responseResult = new HttpResponseResult();
        try {
            System.out.println(bodyJson);
            UserEntityArg userEntityArg= JSON.parseObject(bodyJson, UserEntityArg.class);
            xinLiXueService.login(userEntityArg);
        }catch (Exception e){
            System.out.println("出错了。。。。。。。。。。"+e.getMessage());
            responseResult.setErrCode(500);
            responseResult.setErrMessage(e.getMessage());
        }
        return responseResult;
    }
}
