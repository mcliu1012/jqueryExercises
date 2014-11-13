<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ taglib uri='http://www.springframework.org/tags' prefix='spring'%>
<%
    String sysDate = new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date());
%>
<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<title>Login</title>
</head>
<body>
  <section class="container">
    <div class="login">
      <h1>Login to MCLIU's App</h1>
      <form method="post" action="index">
        <p>
          <input type="text" name="loginName" value="" placeholder="Username or Email">
        </p>
        <p>
          <input type="password" name="password" value="" placeholder="Password">
        </p>
        <p class="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me">
            Remember me on this computer
          </label>
        </p>
        <p class="submit">
          <input type="submit" name="commit" value="Login">
        </p>
      </form>
    </div>

    <div class="login-help">
      <p>
        Forgot your password? <a href="index.html">Click here to reset it</a>.
      </p>
    </div>
  </section>
</body>
</html>