<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="commonImport.jsp" %>

<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<spring:url value='/resources/js/passwordForget.js' var='passwordforgetjs' />

<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<script type='text/javascript' src='${passwordforgetjs}?<%= sysDate %>'></script>
<title>Forgot your password? · MCLIU</title>
</head>
<body>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>找回密码</h1>
      <div class="errorMsg">${error }</div>
      <form id="pPFForm" method="post" action="passwordReset">
        <div class="input-group">
          <span class="input-group-addon min-width-45" id="basic-addon1">
            <span class="icon-envelope" aria-hidden="true"></span>
          </span>
          <input id="pPFLoginNameInput" class="form-control" placeholder="电子邮箱"
            aria-describedby="basic-addon1" name="loginName" autofocus>
        </div>
        <p class="submit" style="width: 100%;">
          <a class="btn btn-default" href="login">返回</a>
          <button type="submit" class="btn btn-primary">提交</button>
        </p>
      </form>
    </div>
  </section>
</body>
</html>