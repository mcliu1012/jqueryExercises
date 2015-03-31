<!DOCTYPE html>
<html lang='en'>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ page session='true'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@ taglib uri='http://www.springframework.org/tags' prefix='spring'%>
<% String sysDate = (new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date())); %>
<spring:url value='/resources/css/lib/bootstrap.css' var='bootstrapcss' />
<spring:url value='/resources/css/lib/bootstrap-responsive.css' var='bootstrapresponsivecss' />
<spring:url value="/resources/css/common/common.css" var="commoncss" />

<link media="screen" rel='stylesheet' href='${bootstrapcss}?<%= sysDate %>' type='text/css' />
<link media="screen" rel='stylesheet' href='${bootstrapresponsivecss}?<%= sysDate %>' type='text/css' />
<link media="screen" rel='stylesheet' href='${commoncss}?<%= sysDate %>' type='text/css' />

<title>System Error!</title>
</head>
<body style="font-size: 18px;">
    <div id="pErrorDiv">
      非常抱歉，请稍后重试。
      <a class="btn pErrorA btn-default" href="<c:url value='/logout'/>">返回到Login页面</a>
    </div>
</body>
</html>