package com.mcliu.jqueryExercises.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {
    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    @RequestMapping(value = {"/", "/login"}, method = RequestMethod.GET)
    public String login(Model model, HttpServletRequest request) {
        logger.info("==== login start ====");
        logger.info("==== login end ====");
        return "login";
    }

    @RequestMapping(value = {"/index"}, method = RequestMethod.POST)
    public String index(Model model, HttpServletRequest request) {

        logger.info("==== index start ====");

        String userName = request.getParameter("username");
        String password = request.getParameter("password");
        if ("871702098@qq.com".equals(userName) && "123456".equals(password)) {
            logger.info("==== login successfully!!! ====");
            logger.info("==== index end ====");
            return "index";
        }

        logger.info("==== index end ====");
        return "login";
    }

}
