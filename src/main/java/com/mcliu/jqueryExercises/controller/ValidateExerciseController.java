package com.mcliu.jqueryExercises.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ValidateExerciseController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(ValidateExerciseController.class);

    @RequestMapping(value = "validateExercise", method = RequestMethod.GET)
    public String initValidateExercise() {
        logger.info("==== validateExercise START ====");

        logger.info("==== validateExercise END ====");
        return "validateExercise";
    }
}
