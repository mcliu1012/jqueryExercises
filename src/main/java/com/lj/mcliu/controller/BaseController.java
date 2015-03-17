package com.lj.mcliu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.validation.BindingResult;

public class BaseController {
    @Autowired
    @Qualifier("messageSource")
    protected MessageSource messageSource;

    protected String getErrorMsg(BindingResult bindingResult) {
        String errorMsg = null;
        if (bindingResult.hasErrors()) {
            String errorCode = bindingResult.getAllErrors().get(0).getDefaultMessage();
            Object[] arguments = bindingResult.getAllErrors().get(0).getArguments();
            errorMsg = messageSource.getMessage(errorCode, arguments, null);
        }
        return errorMsg;
    }
}
