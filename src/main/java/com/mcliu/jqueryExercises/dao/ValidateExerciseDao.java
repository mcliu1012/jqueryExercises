package com.mcliu.jqueryExercises.dao;

import com.mcliu.jqueryExercises.entity.User;

public interface ValidateExerciseDao {

    /**
     * Regist User
     * @param user
     * @throws Exception
     */
    public void insertUser(User user) throws Exception;
}
