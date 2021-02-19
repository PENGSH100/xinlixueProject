package com.xinlixue.one.http;

/**
 * Created by zhangzh on 2018/1/18.
 */

import java.io.Serializable;

public class HttpResponseResult<T> implements Serializable {

  public static int SUCCESS_CODE = 200;
  public static int SYSTEM_ERROR_CODE = 500;

  /**
   * 成功是：200
   */

  protected int errCode;//错误码
  protected String errKey;//错误码英文说明
  protected String errMessage;//错误信息（由业务端生成）
  protected String errDescription;//错误码中文说明
  protected T result;//返回结果实体

  public static int getSuccessCode() {
    return SUCCESS_CODE;
  }

  public static void setSuccessCode(int successCode) {
    SUCCESS_CODE = successCode;
  }

  public static int getSystemErrorCode() {
    return SYSTEM_ERROR_CODE;
  }

  public static void setSystemErrorCode(int systemErrorCode) {
    SYSTEM_ERROR_CODE = systemErrorCode;
  }

  public int getErrCode() {
    return errCode;
  }

  public void setErrCode(int errCode) {
    this.errCode = errCode;
  }

  public String getErrKey() {
    return errKey;
  }

  public void setErrKey(String errKey) {
    this.errKey = errKey;
  }

  public String getErrMessage() {
    return errMessage;
  }

  public void setErrMessage(String errMessage) {
    this.errMessage = errMessage;
  }

  public String getErrDescription() {
    return errDescription;
  }

  public void setErrDescription(String errDescription) {
    this.errDescription = errDescription;
  }

  public T getResult() {
    return result;
  }

  public void setResult(T result) {
    this.result = result;
  }

  public HttpResponseResult() {
    this.errCode = SUCCESS_CODE;
    this.errMessage = "成功";
  }

  public HttpResponseResult(int errCode, String errDescription) {
    this.errCode = errCode;
    this.errDescription = errDescription;
  }

  public HttpResponseResult(int errCode, String errKey, String errDescription) {
    this.errCode = errCode;
    this.errKey = errKey;
    this.errDescription = errDescription;
  }

  public static HttpResponseResult succResult() {
    HttpResponseResult result = new HttpResponseResult();
    result.errCode = SUCCESS_CODE;
    result.errKey = "success";
    result.errDescription = "成功";
    return result;
  }


  public static HttpResponseResult SystemErrorResult() {
    HttpResponseResult result = new HttpResponseResult();
    result.errCode = SYSTEM_ERROR_CODE;
    result.errKey = "system busy！";
    result.errDescription = "系统繁忙,请稍后重试！";
    return result;
  }


}
