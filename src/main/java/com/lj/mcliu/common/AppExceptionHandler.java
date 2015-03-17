package com.lj.mcliu.common;

import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

/**
 * Exception Handler for all Controllers
 */
@ControllerAdvice
public class AppExceptionHandler {

    /**
     * try to access a only post support method, will get a redirect to login controller
     * @param ex
     * @return
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public String handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException ex) {
        return "redirect:/login";
    }

    /**
     * Show system error page, for all runtime Exception
     * @param ex
     * @return
     */
    @ExceptionHandler(Exception.class)
    public ModelAndView handleCustomException(HttpRequestMethodNotSupportedException ex) {
        return  new ModelAndView("views/error.jsp");
    }
}
