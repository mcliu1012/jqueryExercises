<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<title>MCLIU | 网络工具</title>
<%@include file="../../commonImport.jsp"%>
</head>

<body onselectstart="return true;" ondragstart="return false;" onload="isHasLoad()">
  <div id="loadDiv">
    <div class="loadDiv-fix">
      <img class="loading" src="/resources/img/loading/loading.gif" />
      <span>loading......</span>
    </div>
  </div>
  <div id="header"><%@include file="../../header.jsp"%></div>
  <div id="leftAndContent">
    <div id="left"><%@include file="../../left.jsp"%></div>
    <div id="content">
      <div class="breadcrumbDiv">
        <ul class="breadcrumb">
          <li class="homeLi"><a href="<c:url value="/index" />"><span class="icon-home"></span>首页</a></li>
          <li class="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">
            <a href="<c:url value="/laboratory" />"><span class="icon-beaker"></span>实验室</a>
          </li>
          <li class="active visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">网络工具</li>
        </ul>
      </div>
      <div id="pNetworkDiv">
        施工中......
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../../footer.jsp"%></div>
  <%@include file="../../qqservice.jsp"%>
</body>
</html>