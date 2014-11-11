package com.mcliu.jqueryExercises.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mcliu.jqueryExercises.dao.LoginDao;
import com.mcliu.jqueryExercises.entity.User;
import com.mcliu.jqueryExercises.service.LoginService;

@Service("LoginService")
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginDao loginDao;

    /**
     * get User's Info by login id
     * @param loginId
     * @return
     * @throws Exception
     */
    @Override
    public User getUserByLoginId(int loginId) throws Exception {
        return loginDao.selectUserByLoginId(loginId);
    }

    /**
     * get User's Info by login name
     * @param loginName
     * @return
     * @throws Exception
     */
    @Override
    public User getUserByLoginName(String loginName) throws Exception {
        return loginDao.selectUserByLoginName(loginName);
    }

    /**
     * get User's Info list by name
     * @param name
     * @return
     * @throws Exception
     */
    @Override
    public List<User> getUserListByName(String name) throws Exception {
        return loginDao.selectUserListByName(name);
    }

}
