package com.lj.mcliu.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class TokenInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
           throws Exception {

        String sessionToken = (String) request.getSession().getAttribute("token");

        if (!"POST".equals(request.getMethod())) {

            // tokenをセッションに保存する。
            if (StringUtils.isEmpty(sessionToken)) {

                // tokenを作成する。
                String date = String.valueOf(System.currentTimeMillis());
                request.getSession().setAttribute("token", request.getSession().getId() + date);
            }
            return true;
        }

        String requestToken = (String) request.getParameter("token");

        // tokenチェック
        if (requestToken == null || !requestToken.equals(sessionToken)) {
            String contextPath = request.getContextPath();
            String redirectPath = contextPath + "/logout";
            response.sendRedirect(redirectPath);
            return false;
        }

        return true;
    }
}
