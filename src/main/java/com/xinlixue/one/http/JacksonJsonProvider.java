package com.xinlixue.one.http;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import io.swagger.util.Json;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;

/**
 * Created by zhangzh on 2018/1/18.
 */
@Provider
@Produces({MediaType.APPLICATION_JSON})
public class JacksonJsonProvider extends JacksonJaxbJsonProvider {
  private static ObjectMapper commonMapper = Json.mapper();
  public JacksonJsonProvider() {
    super.setMapper(commonMapper);
  }
}