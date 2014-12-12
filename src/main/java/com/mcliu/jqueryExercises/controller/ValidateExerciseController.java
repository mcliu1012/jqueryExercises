package com.mcliu.jqueryExercises.controller;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.LoginService;
import com.mcliu.jqueryExercises.service.ValidateExerciseService;
import com.mcliu.jqueryExercises.util.CommonUtil;

@Controller
public class ValidateExerciseController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(ValidateExerciseController.class);

    @Autowired
    private ValidateExerciseService validateExerciseService;

    @Autowired
    private LoginService loginService;

    /**
     * 画面初始化
     *
     * @return
     */
    @RequestMapping(value = "validateExercise", method = RequestMethod.GET)
    public String initValidateExercise() {
        logger.info("==== validateExercise START ====");

        logger.info("==== validateExercise END ====");
        return "validateExercise";
    }

    /**
     * 注册用户
     *
     * @param loginUserInfo
     * @return
     */
    @RequestMapping(value = "registUser", method = RequestMethod.POST)
    public String registUser(LoginUserInfo loginUserInfo) {
        logger.info("==== registUser START ====");

        System.out.println("E-mail:" + loginUserInfo.getLoginName());
        System.out.println("Password:" + loginUserInfo.getPassword());
        System.out.println("Nick Name:" + loginUserInfo.getName());

        logger.info("==== registUser END ====");
        return "validateExercise";
    }

    private boolean isParamCheck(LoginUserInfo loginUserInfo, StringBuffer errorMessage) throws Exception {
        // Email
        if (StringUtils.isEmpty(loginUserInfo.getLoginName())) {
            errorMessage.append("请输入Email地址(S)");
            return false;
        }
        // Email的trim处理
        loginUserInfo.setLoginName(CommonUtil.trimSpace(loginUserInfo.getLoginName()));
        // Email格式验证
        if (loginUserInfo.getLoginName().matches("/w+([-+.]/w+)*@/w+([-.]/w+)*/./w+([-.]/w+)*")) {
            errorMessage.append("E-mail地址格式不正确(S)");
        }
        // 是否重复注册验证
        LoginUserInfo dbLoginUserInfo = loginService.getUserByLoginName(loginUserInfo.getLoginName());
        if (dbLoginUserInfo == null) {
            errorMessage.append("该Email已注册，请重新填写或直接登录");
            return false;
        }

        // Password
        // TODO
        return true;
    }
}
