package com.mcliu.jqueryExercises.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        EncryptUtil encryptUtil = new EncryptUtil();
        String codePassword = encryptUtil.encrypt(inputPassword);
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
        LoginUserInfo loginUserInfo = null;

        User user = loginDao.selectUserByLoginName(loginName);
        if (user != null) {
            loginUserInfo = new LoginUserInfo();
            loginUserInfo.setLoginName(user.getLoginName());
            loginUserInfo.setPassword(user.getPassword());
            loginUserInfo.setName(user.getName());
        }
        return loginUserInfo;
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
