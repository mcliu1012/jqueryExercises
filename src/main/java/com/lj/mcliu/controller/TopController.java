package com.lj.mcliu.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TopController {
    private static Logger logger = LoggerFactory.getLogger(TopController.class);

    /**
     * index
     *
     * @return
     */
    @RequestMapping(value = "index")
    public String index() {
        logger.info("==== index START  ====");

        String index = "index";

        logger.info("==== index END  ====");
        return index;
    }

    /**
     * logout
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "logout")
    public String logout(HttpServletRequest request) {
        logger.info("==== logout START  ====");

        // セッションを削除、ログイン画面へ遷移する。
        request.getSession().invalidate();

        logger.info("==== logout END  ====");
        return "redirect:/login";
    }
}
