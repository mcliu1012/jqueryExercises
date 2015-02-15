package com.mcliu.jqueryExercises.model;

import java.sql.Timestamp;

public class LoginUserInfo {
    private int id;
    private String loginName;
    private String passwordFirst;
    private String password;
    private String name;
    private String keepLoginName;
    // 找回密码用-验证码
    private String validateCode;
    // 找回密码用-过时日期
    private Timestamp outDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKeepLoginName() {
        return keepLoginName;
    }

    public void setKeepLoginName(String keepLoginName) {
        this.keepLoginName = keepLoginName;
    }

    public String getPasswordFirst() {
        return passwordFirst;
    }

    public void setPasswordFirst(String passwordFirst) {
        this.passwordFirst = passwordFirst;
    }

    public String getValidateCode() {
        return validateCode;
    }

    public void setValidateCode(String validateCode) {
        this.validateCode = validateCode;
    }

    public Timestamp getOutDate() {
        return outDate;
    }

    public void setOutDate(Timestamp outDate) {
        this.outDate = outDate;
    }

}
