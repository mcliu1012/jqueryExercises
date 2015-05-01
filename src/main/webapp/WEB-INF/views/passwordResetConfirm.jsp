<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="commonImport.jsp" %>

<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<title>Password sent! · MCLIU</title>
</head>
<body>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>重置密码确认信息已经发送！</h1>
      <form method="get" action="">
        <p>
          我们发给您一个电子邮件,其中包含一个链接,将允许您在接下来的30分钟内重置您的密码。<br/><br/>
          如果电子邮件在几分钟内不出现，请检查您的垃圾邮件文件夹。
        </p>
        <p class="submit">
          <button type="submit" class="btn btn-primary">返回登录界面</button>
        </p>
      </form>
    </div>
  </section>
</body>
</html>