package com.mcliu.jqueryExercises.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mcliu.jqueryExercises.dao.ValidateExerciseDao;
import com.mcliu.jqueryExercises.entity.User;
import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.ValidateExerciseService;

@Service("ValidateExerciseService")
public class ValidateExerciseServiceImpl implements ValidateExerciseService {

    private static Logger logger = LoggerFactory.getLogger(ValidateExerciseServiceImpl.class);

    @Autowired
    private ValidateExerciseDao validateExerciseDao;

    public void addUser(LoginUserInfo loginUserInfo) throws Exception {
        logger.info("==== insertUser START ====");

        // TODO
        User user = new User();
        validateExerciseDao.insertUser(user);

        logger.info("==== insertUser END ====");
    }

}
