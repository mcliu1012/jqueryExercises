package com.mcliu.jqueryExercises.dao;

import java.util.List;

import com.mcliu.jqueryExercises.entity.User;

public interface LoginDao {
    /**
     * get User's Info by login id
     * @param loginId
     * @return
     * @throws Exception
     */
    public User selectUserByLoginId(int loginId) throws Exception;

    /**
     * get User's Info by login name
     * @param loginName
     * @return
     * @throws Exception
     */
    public User selectUserByLoginName(String loginName) throws Exception;

    /**
     * get User's Info list by name
     * @param name
     * @return
     * @throws Exception
     */
    public List<User> selectUserListByName(String name) throws Exception;

    /**
     * 更新需要改密码的用户的validateCode和outDate
     *
     * @param user
     * @throws Exception
     */
    public void updatePasswordForgetUser(User user) throws Exception;
}
