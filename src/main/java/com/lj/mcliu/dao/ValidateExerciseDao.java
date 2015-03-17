package com.lj.mcliu.dao;

import java.util.List;

import com.lj.mcliu.entity.User;

public interface ValidateExerciseDao {

    /**
     * Regist User
     *
     * @param user
     * @throws Exception
     */
    public void insertUser(User user) throws Exception;

    /**
     * 取得所有注册用户的信息
     *
     * @return 注册用户集合
     * @throws Exception
     */
    public List<User> selectUserList() throws Exception;
}
