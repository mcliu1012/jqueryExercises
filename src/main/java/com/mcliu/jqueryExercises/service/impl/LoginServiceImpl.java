package com.mcliu.jqueryExercises.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mcliu.jqueryExercises.dao.LoginDao;
import com.mcliu.jqueryExercises.entity.User;
import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.LoginService;
import com.mcliu.jqueryExercises.util.EncryptUtil;

@Service("LoginService")
public class LoginServiceImpl implements LoginService {

    private static Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);

    @Autowired
    private LoginDao loginDao;

    /**
     * By registered Admin user information, and check the password
     *
     * @param user
     * @param password
     * @return
     * @throws Exception
     */
    public boolean isLoginSuccess(LoginUserInfo loginUserInfo, String inputPassword) throws Exception {
        logger.info("==== isLoginSuccess START ====");

        if (loginUserInfo == null) {
            return false;
        }

        String dbPassword = loginUserInfo.getPassword();

        // Encrypt the input password
        String codePassword = EncryptUtil.encrypt(inputPassword);
        boolean isLoginSuccessFlag = codePassword.equals(dbPassword);

        logger.info("==== isLoginSuccess END ====");
        return isLoginSuccessFlag;
    }

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
    public LoginUserInfo getUserByLoginName(String loginName) throws Exception {
        User user = loginDao.selectUserByLoginName(loginName);
        return convertUserToLoginUserInfo(user);
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

    /**
     * 更新需要改密码的用户的validateCode和outDate
     *
     * @param user
     * @throws Exception
     */
    @Override
    @Transactional(rollbackFor=Exception.class)
    public void updatePasswordForgetUser(LoginUserInfo loginUserInfo) throws Exception {
        logger.info("==== updatePasswordForgetUser START ====");

        User user = convertLoginUserInfoToUser(loginUserInfo);
        loginDao.updatePasswordForgetUser(user);

        logger.info("==== updatePasswordForgetUser END ====");
    }

    /**
     * 重置密码
     *
     * @param loginUserInfo
     * @throws Exception
     */
    @Override
    @Transactional(rollbackFor=Exception.class)
    public void updatePassword(LoginUserInfo loginUserInfo) throws Exception {
        logger.info("==== updatePassword START ====");

        User user = convertLoginUserInfoToUser(loginUserInfo);
        // Encrypt the input password
        String codePassword = EncryptUtil.encrypt(user.getPassword());
        user.setPassword(codePassword);
        loginDao.updatePassword(user);

        logger.info("==== updatePassword END ====");
    }

    /**
     * 前台Info转换成后台Entity
     *
     * @param loginUserInfo
     * @return
     */
    private static User convertLoginUserInfoToUser(LoginUserInfo loginUserInfo) {
        User user = new User();
        user.setLoginName(loginUserInfo.getLoginName());
        user.setPassword(loginUserInfo.getPassword());
        user.setName(loginUserInfo.getName());
        user.setValidateCode(loginUserInfo.getValidateCode());
        user.setOutDate(loginUserInfo.getOutDate());
        return user;
    }

    /**
     * 后台Entity转换成前台Info
     * @param user
     * @return
     */
    private static LoginUserInfo convertUserToLoginUserInfo(User user) {
        LoginUserInfo info = new LoginUserInfo();
        info.setId(user.getId());
        info.setLoginName(user.getLoginName());
        info.setPassword(user.getPassword());
        info.setName(user.getName());
        info.setValidateCode(user.getValidateCode());
        info.setOutDate(user.getOutDate());
        return info;
    }
}
