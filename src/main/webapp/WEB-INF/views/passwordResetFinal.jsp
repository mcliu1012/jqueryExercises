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
      <form id="pPRFForm" method="post">
        <div class="input-group">
          <span class="input-group-addon min-width-45" id="basic-addon1">
            <span class="icon-key" aria-hidden="true"></span>
          </span>
          <input id="pPRFPasswordInput" type="password" class="form-control" placeholder="密码"
            aria-describedby="basic-addon1" name="passwordFirst" autofocus>
        </div>
        <div class="input-group">
          <span class="input-group-addon min-width-45" id="basic-addon2">
            <span class="icon-check" aria-hidden="true"></span>
          </span>
          <input id="pPRFConfirmPasswordInput" type="password" class="form-control" placeholder="确认密码"
            aria-describedby="basic-addon2" name="password">
        </div>
        <p class="submit" style="width: 100%;">
          <input type="hidden" name="loginName" value="${loginName }" />
          <button type="reset" id="pPRFResetBtn" class="btn btn-default">重置</button>
          <button type="button" id="pPRFConfirmBtn" class="btn btn-primary" name="commit">确认</button>
        </p>
      </form>
    </div>
  </section>
</body>
</html>