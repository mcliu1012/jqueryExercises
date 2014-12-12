package com.mcliu.jqueryExercises.service.impl;

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
        validateExerciseDao.insertUser(user);

        logger.info("==== insertUser END ====");
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
        user.setName(loginUserInfo.getName());

        // 加密Password
        String encryptionPassword = EncryptUtil.encrypt(loginUserInfo.getPassword());
        user.setPassword(encryptionPassword);
        return user;
    }

}
