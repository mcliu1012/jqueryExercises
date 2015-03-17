package com.lj.mcliu.service;

import java.util.List;

import com.lj.mcliu.entity.User;
import com.lj.mcliu.model.LoginUserInfo;

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

    /**
     * 更新需要改密码的用户的validateCode和outDate
     *
     * @param user
     * @throws Exception
     */
    public void updatePasswordForgetUser(LoginUserInfo loginUserInfo) throws Exception;

    /**
     * 重置密码
     *
     * @param loginUserInfo
     * @throws Exception
     */
    public void updatePassword(LoginUserInfo loginUserInfo) throws Exception;
}
