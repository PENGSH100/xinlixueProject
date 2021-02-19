package com.xinlixue.one.http;


import com.xinlixue.one.context.ApplicationContextHolder;
import com.xinlixue.one.controller.XinLiXueController;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by zhangzh on 2017/7/21.
 */
@ApplicationPath("/")//@ApplicationPath("/")中的路径会加在swagger ApiService路径的前面，组成最终的访问路径
public class RestApplication extends Application {
    private Set<Object> singletons = new HashSet<Object>();
    private Set<Class<?>> classes = new HashSet<Class<?>>();

    public RestApplication() {
      singletons.add(ApplicationContextHolder.getBean(XinLiXueController.class));
        classes.add(io.swagger.jaxrs.listing.ApiListingResource.class);
        classes.add(io.swagger.jaxrs.listing.SwaggerSerializers.class);
        classes.add(JacksonJsonProvider.class);
    }

    @Override
    public Set<Class<?>> getClasses() {
        return classes;
    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }

}
