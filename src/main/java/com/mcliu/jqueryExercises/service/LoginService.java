package com.mcliu.jqueryExercises.service;

import java.util.List;

import com.mcliu.jqueryExercises.entity.User;
import com.mcliu.jqueryExercises.model.LoginUserInfo;

public interface LoginService {
    /**
     * By registered Admin user information, and check the password
     *
     * @param user
     * @param password
     * @return
     * @throws Exception
     */
    public boolean isLoginSuccess(LoginUserInfo loginUserInfo, String inputPassword) throws Exception;

    /**
     * get User's Info by login id
     *
     * @param loginId
     * @return
     * @throws Exception
     */
    public User getUserByLoginId(int loginId) throws Exception;

    /**
     * get User's Info by login name
     *
     * @param loginName
     * @return
     * @throws Exception
     */
    public LoginUserInfo getUserByLoginName(String loginName) throws Exception;

    /**
     * get User's Info list by name
     *
     * @param name
     * @return
     * @throws Exception
     */
    public List<User> getUserListByName(String name) throws Exception;
}
