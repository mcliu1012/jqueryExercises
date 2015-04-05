<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/mcliu/resources/css/laboratory.css"/>
<script type="text/javascript" src="/mcliu/resources/js/laboratory.js"></script>
</head>

<body>
  <div id="header"><%@include file="../header.jsp"%></div>
  <div id="left"><%@include file="../left.jsp"%></div>
  <div id="content">
    <div class="breadcrumbDiv">
      <ul class="breadcrumb">
        <li><a href="<c:url value="/index" />"><span class="icon-home"></span>首页</a></li>
        <li class="active">实验室</li>
      </ul>
    </div>
    <div id="pVERegistDiv">
      <%@include file="userRegist/userRegist.jsp"%>
    </div>
    <div id="pVEDiv">
      <div class="pVETitle"><h2>TODO...</h2></div>
    </div>
  </div>
  <div id="footer"><%@include file="../footer.jsp"%></div>
  <%@include file="../qqservice.jsp"%>
</body>
</html>