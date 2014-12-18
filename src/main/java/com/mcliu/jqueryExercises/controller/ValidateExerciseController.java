package com.mcliu.jqueryExercises.controller;

import java.util.HashMap;
import java.util.Map;

import net.arnx.jsonic.JSON;

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
@RequestMapping("validateExercise")
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
    @RequestMapping(value = "init", method = RequestMethod.GET)
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
    public String registUser(LoginUserInfo loginUserInfo) throws Exception {
        logger.info("==== registUser START ====");

        System.out.println("E-mail:" + loginUserInfo.getLoginName());
        System.out.println("Password:" + loginUserInfo.getPassword());
        System.out.println("Nick Name:" + loginUserInfo.getName());

        StringBuffer errorMessage = new StringBuffer();
        if (!isParamCheck(loginUserInfo, errorMessage)) {
            Map<Object, Object> map = new HashMap<Object, Object>();
            map.put("error", errorMessage.toString());
            String error = JSON.encode(map);
            logger.debug(error);
            return error;
        }

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
        if (!loginUserInfo.getLoginName().matches("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*")) {
            errorMessage.append("E-mail地址格式不正确(S)");
        }
        // 是否重复注册验证
        LoginUserInfo dbLoginUserInfo = loginService.getUserByLoginName(loginUserInfo.getLoginName());
        if (dbLoginUserInfo == null) {
            errorMessage.append("该Email已注册，请重新填写或直接登录");
            return false;
        }

        // Password
        if (StringUtils.isEmpty(loginUserInfo.getPassword()) || StringUtils.isEmpty(loginUserInfo.getPasswordFirst())) {
            errorMessage.append("请输入密码(S)");
            return false;
        }
        if (loginUserInfo.getPassword().length() < 2 || loginUserInfo.getPasswordFirst().length() < 2) {
            errorMessage.append("密码长度不能小于2(S)");
            return false;
        }
        if (loginUserInfo.getPassword().length() > 14 || loginUserInfo.getPasswordFirst().length() > 14) {
            errorMessage.append("密码长度不能大于14(S)");
            return false;
        }
        if (!loginUserInfo.getPassword().equals(loginUserInfo.getPasswordFirst())) {
            errorMessage.append("两次输入的密码不一致(S)");
            return false;
        }
        return true;
    }
}
