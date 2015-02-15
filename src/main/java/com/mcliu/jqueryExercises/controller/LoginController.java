package com.mcliu.jqueryExercises.controller;

import java.sql.Timestamp;
import java.util.UUID;

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
import org.springframework.web.bind.annotation.RequestParam;

import com.mcliu.jqueryExercises.common.Constants;
import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.LoginService;
import com.mcliu.jqueryExercises.util.EncryptUtil;

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
     * Forgot password
     *
     * @param model
     * @param request
     * @return
     */
    @RequestMapping(value = "passwordForget", method = RequestMethod.GET)
    public String passwordForget(Model model, HttpServletRequest request) {
        logger.info("==== passwordForget START ====");

        logger.info("==== passwordForget END ====");
        return "passwordForget";
    }

    /**
     * Forgot password
     *
     * @param model
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "passwordReset", method = RequestMethod.POST)
    public String passwordReset(Model model, @RequestParam String loginName, HttpServletRequest request) throws Exception {
        logger.info("==== passwordReset START ====");

        LoginUserInfo loginUserInfo = loginService.getUserByLoginName(loginName);
        if (StringUtils.isEmpty(loginUserInfo.getLoginName())) {
            String errorMsg = messageSource.getMessage("error.passwordReset.email.notFound", null, null);
            model.addAttribute("error", errorMsg);
            return "passwordForget";
        }

        // 生成邮箱内的链接并发送邮件
        // 生成邮箱内的链接
        String secretKey = UUID.randomUUID().toString(); // 密钥
        Timestamp outDate = new Timestamp(System.currentTimeMillis() + 30 * 60 * 1000);// 30分钟后过期
        loginUserInfo.setValidateCode(secretKey);
        loginUserInfo.setOutDate(outDate);
        loginService.updatePasswordForgetUser(loginUserInfo);

        logger.info("loginName ====> " + loginUserInfo.getLoginName());
        long date = outDate.getTime() / 1000 * 1000;// 忽略毫秒数  mySql 取出时间是忽略毫秒数的
        String key = loginUserInfo.getLoginName() + "$" + date + "$" + secretKey;
        logger.info("key ====>" + key);
        String digitalSignature = EncryptUtil.encrypt(key);// 数字签名

        String path = request.getContextPath();
        String basePath = request.getScheme() + "://"
                + request.getServerName() + ":"
                + request.getServerPort() + path + "/";
        String resetPassHref = basePath + "checkLink?sid="
                + digitalSignature + "&loginName=" + loginUserInfo.getLoginName();
        String emailContent = "请勿回复本邮件.点击下面的链接,重设密码<br/><a href="
                + resetPassHref + " target='_BLANK'>" + resetPassHref
                + "</a>  或者    <a href=" + resetPassHref
                + " target='_BLANK'>点击我重新设置密码</a>"
                + "<br/>tips:本邮件超过30分钟,链接将会失效，需要重新申请'找回密码'" + key
                + "\t" + digitalSignature;

        // 发送邮件


        logger.info("==== passwordReset END ====");
        return "login";
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
