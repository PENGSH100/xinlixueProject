package com.xinlixue.one.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.xinlixue.one.entity.CacheEntity;
import com.xinlixue.one.mapper.XinLinXueMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

/**
 * @Author pengsh
 * @Date: 2021/04/12
 * @Description
 */
@Service
public class XinLiXueThreeService {
    @Autowired
    private EffectInfoCacheLoader effectInfoCacheLoader;
    private Cache<String, CacheEntity> batchCaffCalCache =null;
    @Autowired
    private XinLinXueMapper xinLinXueMapper;

    @PostConstruct
    public void init(){
        batchCaffCalCache= Caffeine.newBuilder().expireAfterWrite(60*3, TimeUnit.MINUTES).maximumSize(5000).build(this.effectInfoCacheLoader);
    }
}
