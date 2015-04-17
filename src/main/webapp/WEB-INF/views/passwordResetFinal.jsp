<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="commonImport.jsp" %>

<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<spring:url value="/resources/js/passwordResetFinal.js" var="passwordresetfinaljs"></spring:url>
<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<script type="text/javascript" src="${passwordresetfinaljs}"></script>
<title>Reset your password · MCLIU</title>
</head>
<body>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>重置密码</h1>
      <div class="errorMsg"></div>
      <form method="post">
        <p>
          <input id="pPRFPasswordInput" type="password" name="passwordFirst" placeholder="Password" autofocus>
        </p>
        <p>
          <input id="pPRFConfirmPasswordInput" type="password" name="password" placeholder="Confirm password">
        </p>
        <p class="submit">
          <input type="hidden" name="loginName" value="${loginName }" />
          <button type="button" id="pPRFConfirmBtn" class="btn btn-primary" name="commit">确认</button>
        </p>
      </form>
    </div>
  </section>
</body>
</html>