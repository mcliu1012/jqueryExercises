package com.mcliu.jqueryExercises.service;

import com.mcliu.jqueryExercises.model.LoginUserInfo;

public interface ValidateExerciseService {

    /**
     * Regist User
     * @param loginUserInfo
     * @throws Exception
     */
    public void addUser(LoginUserInfo loginUserInfo) throws Exception;
}
