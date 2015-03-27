<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="commonImport.jsp" %>

<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<spring:url value="/resources/js/login.js" var="loginjs"></spring:url>
<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<script type="text/javascript" src="${loginjs}?<%=sysDate%>"></script>
<title>Login</title>
</head>
<body>
  <div id="pLoginSignUp"><button type="button" class="btn btn-primary btn-lg">Sign up</button></div>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>Login to MCLIU's website</h1>
      <div class="successMsg">${successMsg }</div>
      <div class="errorMsg">${error }</div>
      <form method="post" action="login">
        <p>
          <input type="text" id="loginNameInput" name="loginName" value="${loginName}" placeholder="Username or Email" autofocus>
        </p>
        <p>
          <input type="password" name="password" value="${password}" placeholder="Password">
        </p>
        <p class="remember_me">
          <label>
          	<c:set var="checkFlag" value="${'on' == keepLoginName ? 'checked' : '' }"></c:set>
            <input type="checkbox" name="keepLoginName" id="keepLoginName" checked='${checkFlag}'>
            Remember me on this computer
          </label>
        </p>
        <p class="submit">
          <input type="submit" class="loginCursorPointer" name="commit" value="Login">
        </p>
      </form>
      <input id="pageStatus" name="pageStatus" type="hidden" value="${pageStatus}" />
    </div>

    <div class="login-help">
      <p>
        Forgot your password? <a href="<c:url value='/passwordForget' />">Click here to reset it</a>.
      </p>
    </div>
  </section>
</body>
</html>