package com.mcliu.jqueryExercises.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mcliu.jqueryExercises.entity.User;
import com.mcliu.jqueryExercises.service.LoginService;

@Controller
public class LoginController {
    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = {"/", "/login"}, method = RequestMethod.GET)
    public String login(Model model, HttpServletRequest request) {
        logger.info("==== login start ====");
        logger.info("==== login end ====");
        return "login";
    }

    @RequestMapping(value = {"/index"}, method = RequestMethod.POST)
    public String index(Model model, HttpServletRequest request) throws Exception {

        logger.info("==== index start ====");

        String userName = request.getParameter("username");
        String password = request.getParameter("password");

        User user = loginService.getUserByLoginName(userName);
        if (user != null && password.equals(user.getPassword())) {
            logger.info("==== login successfully!!! ====");
            logger.info("==== index end ====");
            return "index";
        }

//        if ("871702098@qq.com".equals(userName) && "123456".equals(password)) {
//            logger.info("==== login successfully!!! ====");
//            logger.info("==== index end ====");
//            return "index";
//        }

        logger.info("==== index end ====");
        return "login";
    }

}
