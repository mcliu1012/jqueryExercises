package com.lj.mcliu.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.arnx.jsonic.JSON;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lj.mcliu.model.LoginUserInfo;
import com.lj.mcliu.service.LoginService;
import com.lj.mcliu.service.ValidateExerciseService;
import com.lj.mcliu.util.CommonUtil;
import com.lj.mcliu.util.address.IpAddress;

@Controller
@RequestMapping("laboratory")
public class LaboratoryController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(LaboratoryController.class);

    @Autowired
    private ValidateExerciseService validateExerciseService;

    @Autowired
    private LoginService loginService;

    @Value("{qr.code.save.path}")
    private String qrCodePath;

    /**
     * 画面初始化
     *
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String initLaboratory() {
        logger.info("==== laboratory START ====");

        logger.info("==== laboratory END ====");
        return "laboratory/laboratory";
    }

    /**
     * 注册用户
     *
     * @param loginUserInfo
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "registUser", method = RequestMethod.POST)
    public String registUser(LoginUserInfo loginUserInfo, Model model) throws Exception {
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
        validateExerciseService.addUser(loginUserInfo);

        logger.info("==== registUser END ====");
        return JSON.encode(model);
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
            return false;
        }
        // 是否重复注册验证
        LoginUserInfo dbLoginUserInfo = loginService.getUserByLoginName(loginUserInfo.getLoginName());
        if (dbLoginUserInfo.getLoginName() != null) {
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

    @RequestMapping(value = "users", method = RequestMethod.GET)
    public String users(Model model) throws Exception {
        logger.info("==== users START ====");

        List<LoginUserInfo> loginUserInfoList = validateExerciseService.getLoginUserInfoList();
        model.addAttribute("loginUserInfoList", loginUserInfoList);

        logger.info("==== users END ====");
        return "laboratory/users/userList";
    }

    @ResponseBody
    @RequestMapping(value = "getLoginUserInfoList", method = RequestMethod.GET)
    public String getLoginUserInfoList(Model model) throws Exception {
        logger.info("==== getLoginUserInfoList START ====");

        List<LoginUserInfo> loginUserInfoList = validateExerciseService.getLoginUserInfoList();
        model.addAttribute("loginUserInfoList", loginUserInfoList);

        logger.info("==== getLoginUserInfoList END ====");
        return JSON.encode(model);
    }

    /**
     * 网络工具初始化
     *
     * @param model
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "network", method = RequestMethod.GET)
    public String network(Model model, HttpServletRequest request) throws Exception {
        logger.info("==== network START ====");

        String hostIp = IpAddress.getClientIpAddr(request);
        String hostAddress = IpAddress.GetAddressByIp(hostIp);
        model.addAttribute("hostIp", hostIp);
        model.addAttribute("hostAddress", hostAddress);

        logger.info("==== network END ====");
        return "laboratory/app/network";
    }

    @ResponseBody
    @RequestMapping(value = "checkIp", method = RequestMethod.POST)
    public String checkIp(Model model, @RequestParam String checkIp) {
        logger.info("==== checkIp START ====");

        String checkIpAddress = IpAddress.GetAddressByIp(checkIp);
        model.addAttribute("checkIpAddress", checkIpAddress);

        logger.info("==== checkIp END ====");
        return JSON.encode(model);
    }

    /**
     * 二维码初始化
     *
     * @param model
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "qrcode", method = RequestMethod.GET)
    public String qrcode(Model model) throws Exception {
        logger.info("==== qrcode START ====");

        logger.info("==== qrcode END ====");
        return "laboratory/app/qrcode";
    }
}
