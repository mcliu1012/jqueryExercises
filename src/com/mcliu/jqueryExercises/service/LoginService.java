package com.mcliu.jqueryExercises.service;

import java.util.List;

import com.mcliu.jqueryExercises.entity.User;

public interface LoginService {
    /**
     * get User's Info by login id
     * @param loginId
     * @return
     * @throws Exception
     */
    public User getUserByLoginId(int loginId) throws Exception;

    /**
     * get User's Info by login name
     * @param loginName
     * @return
     * @throws Exception
     */
    public User getUserByLoginName(String loginName) throws Exception;

    /**
     * get User's Info list by name
     * @param name
     * @return
     * @throws Exception
     */
    public List<User> getUserListByName(String name) throws Exception;
}
