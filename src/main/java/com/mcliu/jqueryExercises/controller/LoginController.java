package com.mcliu.jqueryExercises.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mcliu.jqueryExercises.common.Constants;
import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.LoginService;

/**
 * LoginController
 *
 */
@Controller
public class LoginController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private LoginService loginService;

    /**
     * Initialization of the login page
     * @param model
     * @param request
     * @return
     */
    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login(Model model, HttpServletRequest request) {
        logger.info("==== login start ====");

        String retPage = null;
        HttpSession session = request.getSession();
        if (session.getAttribute("userInfo") != null) {
            // Already logged in
            retPage = "redirect:/index";
        } else {
            // Never logged in
            retPage = "login";
        }
        model.addAttribute("pageStatus", Constants.PAGE_STATUS_INIT);

        logger.info("==== login end ====");
        return retPage;
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String index(LoginUserInfo userInfo, Model model, HttpServletRequest request, HttpServletResponse response) throws Exception {

        logger.info("==== index START ====");

        LoginUserInfo loginUserInfo = loginService.getUserByLoginName(userInfo.getLoginName());

        boolean isLoginSuccess = loginService.isLoginSuccess(loginUserInfo, userInfo.getPassword());

        if (isLoginSuccess) {
            // set cookie
            setCookie(response, userInfo);
            // セッションを無効する, インジェクションを防止する
            request.getSession().invalidate();
            HttpSession session = request.getSession(true);
            // save the user's information to session
            session.setAttribute("userInfo", loginUserInfo);

            logger.info("==== index END ====");
            return "redirect:/index";
        } else {
            String errorMsg = messageSource.getMessage("error.login.loginName.password", null, null);
            model.addAttribute("error", errorMsg);

            // save value
            model.addAttribute("loginName", userInfo.getLoginName());
            model.addAttribute("password", userInfo.getPassword());
            model.addAttribute("keepLoginName", userInfo.getKeepLoginName());

            logger.info("==== index END ====");
            return "login";
        }

    }

    /**
     * Set Cookie
     *
     * @param response
     * @param loginUserInfo
     */
    private void setCookie(HttpServletResponse response, LoginUserInfo loginUserInfo) {
        if (StringUtils.isNotEmpty(loginUserInfo.getKeepLoginName())) {
            // Save the login name
            Cookie loginNameCookie = new Cookie(Constants.COOKIE_LOGIN_NAME, loginUserInfo.getLoginName());
            // HTTPS
//            loginNameCookie.setSecure(true);
            final int cookieMaxAge = 30 * 24 * 60 *60;
            loginNameCookie.setMaxAge(cookieMaxAge);
            response.addCookie(loginNameCookie);
        } else {
            // delete login name
            Cookie loginNameCookie = new Cookie(Constants.COOKIE_LOGIN_NAME, null);
            loginNameCookie.setMaxAge(0);
            response.addCookie(loginNameCookie);
        }
    }

}
