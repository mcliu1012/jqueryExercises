<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="icon" href="/jqueryExercises/resources/img/favicon/favicon.ico" type="image/vnd.microsoft.icon">
<link rel="shortcut icon" href="/jqueryExercises/resources/img/favicon/favicon.ico" type="image/vnd.microsoft.icon">

<%@ page session='true'%>
<% request.setCharacterEncoding("UTF-8"); %>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="commonImport.jsp"%>

<title>Login successfully!</title>
</head>
<body style="font-size:30px;">
  <div class="container">
	<h2 class="inlineBlock">登陆成功！！！</h2>
    <a class="btn floatRight logoutA" href="<c:url value='/logout' />">返回到Login页面</a>
  </div>
</body>
</html>