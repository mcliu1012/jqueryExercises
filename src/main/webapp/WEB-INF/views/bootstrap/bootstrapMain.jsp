<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="../commonImport.jsp"%>
</head>

<body>
  <div id="header"><%@include file="../header.jsp"%></div>
  <div id="leftAndContent">
    <div id="left"><%@include file="../left.jsp"%></div>
    <div id="content">
      <div class="breadcrumbDiv">
        <ul class="breadcrumb">
          <li class="homeLi"><a href="<c:url value="index" />"><span class="icon-home"></span>首页</a></li>
          <li class="active visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">Bootstrap Demo</li>
        </ul>
      </div>
      <div id="pBootstrapMainDiv" class="marginLeft20 marginTop10">
        <a href="<c:url value='/bootstrap/bootstrapFluidLayout' />" target="_blank">Bootstrap流式布局</a>
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../footer.jsp"%></div>
  <%@include file="../qqservice.jsp"%>
</body>
</html>