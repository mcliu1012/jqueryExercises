package com.mcliu.jqueryExercises.controller;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.arnx.jsonic.JSON;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mcliu.jqueryExercises.common.Constants;
import com.mcliu.jqueryExercises.model.LoginUserInfo;
import com.mcliu.jqueryExercises.service.LoginService;
import com.mcliu.jqueryExercises.util.EncryptUtil;
import com.mcliu.jqueryExercises.util.mail.MailSenderInfo;
import com.mcliu.jqueryExercises.util.mail.SimpleMailSender;

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
                + "</a> <br/>或者    <a href=" + resetPassHref
                + " target='_BLANK'>点击我重新设置密码</a>"
                + "<br/>提示 : 本邮件超过30分钟,链接将会失效，需要重新申请'找回密码'。"
                + "<br/>Thanks,<br/>来自MCLIU。";

        // 发送邮件
        // 这个类主要是设置邮件
        MailSenderInfo mailInfo = new MailSenderInfo();
        mailInfo.setMailServerHost("smtp.126.com");
        mailInfo.setMailServerPort("25");
        mailInfo.setValidate(true);
        mailInfo.setUserName("mailsender1012@126.com");
        mailInfo.setPassword("password");// 您的邮箱密码
        mailInfo.setFromAddress("mailsender1012@126.com");
        mailInfo.setToAddress(loginUserInfo.getLoginName());
        mailInfo.setSubject("[MCLIU] 请重置你的密码");
        mailInfo.setContent(emailContent);
        // 这个类主要来发送邮件
        SimpleMailSender.sendHtmlMail(mailInfo);// 发送html格式

        logger.info("==== passwordReset END ====");
        return "passwordResetConfirm";
    }

    /**
     * 点击邮件中的链接
     *
     * @param model
     * @param request
     * @return
     */
    @RequestMapping(value = "checkLink", method = RequestMethod.GET)
    public String checkLink(Model model,
                @RequestParam String sid,
                @RequestParam String loginName,
                HttpServletRequest request) throws Exception {
        logger.info("==== checkLink START ====");

        logger.info("sid ====>" + sid);

        if (sid.equals("") || loginName.equals("")) {
            String errorMsg = messageSource.getMessage("error.email.link.notComplete", null, null);
            model.addAttribute("error", errorMsg);
            return "login";
        }

        LoginUserInfo loginUserInfo = loginService.getUserByLoginName(loginName);
        if (StringUtils.isEmpty(loginUserInfo.getLoginName())) {
            String errorMsg = messageSource.getMessage("error.email.link.notFound", null, null);
            model.addAttribute("error", errorMsg);
            return "login";
        }

        Timestamp outDate = loginUserInfo.getOutDate();
        logger.info("outDate ====>" + outDate);
        if (outDate.getTime() <= System.currentTimeMillis()) { // 表示已经过期
            String errorMsg = messageSource.getMessage("error.email.link.outDate", null, null);
            model.addAttribute("error", errorMsg);
            return "login";
        }

        String key = loginUserInfo.getLoginName() + "$" + outDate.getTime() / 1000 * 1000 + "$" + loginUserInfo.getValidateCode();// 数字签名

        logger.info("key link ====>" + key);
        String digitalSignature = EncryptUtil.encrypt(key);// 数字签名

        logger.info("digitalSignature ====>" + digitalSignature);
        if (!digitalSignature.equals(sid)) {
            String errorMsg = messageSource.getMessage("error.email.link.notMatch", null, null);
            model.addAttribute("error", errorMsg);
            return "login";
        }
        // 链接验证通过 转到修改密码页面
        HttpSession session = request.getSession(true);
        // save the user's information to session
        session.setAttribute("userInfo", loginUserInfo);
        model.addAttribute("loginName", loginName);

        logger.info("==== checkLink END ====");
        return "passwordResetFinal";
    }

    /**
     * 重置密码
     *
     * @param model
     * @param loginUserInfo
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "passwordResetFinal", method = RequestMethod.POST)
    public String passwordResetFinalInit(Model model, LoginUserInfo loginUserInfo, HttpServletRequest request) throws Exception {
        logger.info("==== passwordResetFinal START ====");
        // セッションを削除
        request.getSession().invalidate();

        StringBuffer errorMessage = new StringBuffer();
        if (!isParamCheck(loginUserInfo, errorMessage)) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("error", errorMessage.toString());

            HttpSession session = request.getSession(true);
            // save the user's information to session
            session.setAttribute("userInfo", loginUserInfo);
            return JSON.encode(map);
        }
        // 验证通过，重置密码
        loginService.updatePassword(loginUserInfo);

        logger.info("==== passwordResetFinal END ====");
        return JSON.encode(model);
    }

    /**
     * 修改密码成功，跳转至Login页面
     *
     * @param model
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "passwordResetSuccess", method = RequestMethod.GET)
    public String passwordResetSuccess(Model model, HttpServletRequest request) throws Exception {
        String successMsg = messageSource.getMessage("success.login.password.reset", null, null);
        model.addAttribute("successMsg", successMsg);
        return "login";
    }

    private boolean isParamCheck(LoginUserInfo loginUserInfo, StringBuffer errorMessage) throws Exception {
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
