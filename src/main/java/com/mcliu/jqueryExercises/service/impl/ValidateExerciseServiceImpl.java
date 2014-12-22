package com.mcliu.jqueryExercises.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mcliu.jqueryExercises.dao.ValidateExerciseDao;
import com.mcliu.jqueryExercises.entity.User;
import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.ValidateExerciseService;
import com.mcliu.jqueryExercises.util.EncryptUtil;

@Service("ValidateExerciseService")
public class ValidateExerciseServiceImpl implements ValidateExerciseService {

    private static Logger logger = LoggerFactory.getLogger(ValidateExerciseServiceImpl.class);

    @Autowired
    private ValidateExerciseDao validateExerciseDao;

    /**
     * Regist User
     */
    @Transactional(rollbackFor = Exception.class)
    public void addUser(LoginUserInfo loginUserInfo) throws Exception {
        logger.info("==== insertUser START ====");

        // 前台Info转换成后台Entity
        User user = convertLoginUserInfoToUser(loginUserInfo);

        // 加密Password
        String encryptionPassword = EncryptUtil.encrypt(loginUserInfo.getPassword());
        user.setPassword(encryptionPassword);
        validateExerciseDao.insertUser(user);

        logger.info("==== insertUser END ====");
    }

    /**
     * 取得所有注册用户的信息
     */
    public List<LoginUserInfo> getLoginUserInfoList() throws Exception {
        List<User> userList = validateExerciseDao.selectUserList();

        List<LoginUserInfo> loginUserInfoList = new ArrayList<LoginUserInfo>();
        for (User user : userList) {
            // 后台Entity转换成前台Info
            LoginUserInfo info = convertUserToLoginUserInfo(user);
            loginUserInfoList.add(info);
        }

        return loginUserInfoList;
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
        return info;
    }
}
