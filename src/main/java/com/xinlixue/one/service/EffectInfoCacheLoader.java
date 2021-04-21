package com.xinlixue.one.service;

import com.github.benmanes.caffeine.cache.CacheLoader;
import com.xinlixue.one.entity.CacheEntity;
import com.xinlixue.one.entity.ResultSetEntity;
import org.checkerframework.checker.nullness.qual.NonNull;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.checkerframework.checker.units.qual.C;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author pengsh
 * @Date: 2021/02/18
 * @Description
 */
@Service
public class EffectInfoCacheLoader implements CacheLoader<String, CacheEntity> {
@Autowired
XinLiXueService xinLiXueService;

    @Nullable
    @Override
    public CacheEntity load(@NonNull String key) throws Exception {
        CacheEntity cacheEntity=new CacheEntity();
        List<ResultSetEntity> resultSetEntityList=xinLiXueService.getBackValueThree();
        cacheEntity.setKey(key);
        cacheEntity.setResultSetEntityList(resultSetEntityList);
        return cacheEntity;
    }
}
