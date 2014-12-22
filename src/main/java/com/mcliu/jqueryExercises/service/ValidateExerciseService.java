package com.mcliu.jqueryExercises.service;

import java.util.List;

import com.mcliu.jqueryExercises.model.LoginUserInfo;

public interface ValidateExerciseService {

    /**
     * Regist User
     *
     * @param loginUserInfo
     * @throws Exception
     */
    public void addUser(LoginUserInfo loginUserInfo) throws Exception;

    /**
     * 取得所有注册用户的信息
     *
     * @return
     * @throws Exception
     */
    public List<LoginUserInfo> getLoginUserInfoList() throws Exception;
}
