package com.mcliu.jqueryExercises.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mcliu.jqueryExercises.model.LoginUserInfo;

@Controller
public class ValidateExerciseController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(ValidateExerciseController.class);

    @RequestMapping(value = "validateExercise", method = RequestMethod.GET)
    public String initValidateExercise() {
        logger.info("==== validateExercise START ====");

        logger.info("==== validateExercise END ====");
        return "validateExercise";
    }

    @RequestMapping(value = "registUser", method = RequestMethod.POST)
    public String registUser(LoginUserInfo loginUserInfo) {
        logger.info("==== registUser START ====");

        System.out.println("E-mail:" + loginUserInfo.getLoginName());
        System.out.println("Password:" + loginUserInfo.getPassword());
        System.out.println("Nick Name:" + loginUserInfo.getName());

        logger.info("==== registUser END ====");
        return "validateExercise";
    }
}
