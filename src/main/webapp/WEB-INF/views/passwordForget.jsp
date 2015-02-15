<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="commonImport.jsp" %>

<spring:url value="/resources/css/passwordForget.css" var="passwordforgetcss"></spring:url>
<spring:url value="/resources/js/passwordForget.js" var="passwordforgetjs"></spring:url>
<link rel="stylesheet" type="text/css" href='${passwordforgetcss}?<%=sysDate%>'>
<script type="text/javascript" src="${passwordforgetjs}?<%=sysDate%>"></script>
<title>Forgot your password? · MCLIU</title>
</head>
<body>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>Forgot password</h1>
      <div class="errorMsg">${error }</div>
      <form method="post" action="passwordReset">
        <p>
          <input type="text" id="pPFLoginNameInput" name="loginName" value="${loginName}" placeholder="Enter your email address" autofocus>
        </p>
        <p class="submit">
          <input type="submit" class="cursorPointer" name="commit" value="Submit">
        </p>
      </form>
    </div>
  </section>
</body>
</html>