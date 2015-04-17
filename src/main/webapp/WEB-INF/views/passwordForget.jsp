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
      <h1>Forgot password</h1>
      <div class="errorMsg">${error }</div>
      <form id="pPFForm" method="post" action="passwordReset">
        <p>
          <input id="pPFLoginNameInput" type="text" name="loginName" placeholder="Enter your email address" autofocus>
        </p>
        <p class="submit" style="width: 100%;">
          <a class="btn btn-default" href="login">返回</a>
          <button type="submit" class="btn btn-primary">提交</button>
        </p>
      </form>
    </div>
  </section>
</body>
</html>