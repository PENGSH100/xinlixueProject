package com.xinlixue.one.context;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * Created by zhangzh on 2016/11/17.
 */
public class ApplicationContextHolder implements ApplicationContextAware {

    private static ApplicationContext applicationContext = null;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        ApplicationContextHolder.applicationContext = applicationContext;
    }

    public static final ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    public static Object getBean(String beanName) {
        return getApplicationContext().getBean(beanName);
    }


    public static <T> T getBean(Class<T> requiredType) {
        return getApplicationContext().getBean(requiredType);
    }

    public static <T> T getBean(String name, Class<T> requiredType) {
        return getApplicationContext().getBean(name,requiredType);
    }
}
