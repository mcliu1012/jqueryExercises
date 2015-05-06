<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ page session='true'%>
<% request.setCharacterEncoding("UTF-8"); %>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<title>MCLIU</title>
<%@include file="commonImport.jsp"%>
</head>

<body>
  <div id="header"><%@include file="header.jsp" %></div>
  <div id="leftAndContent">
    <div id="left"><%@include file="left.jsp"%></div>
    <div id="content">
      <div id="pIndexContentDiv" class="jumbotron" style="height: 100%;">
        <div class="container">
          <h1>Hello, world!</h1>
          <p class="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">Whatever is worth doing is worth doing well.</p>
          <p>
            <span class="icon-hand-left"></span>
            <span class="icon-hand-left"></span>
            <span class="icon-hand-left"></span>
            <span class="icon-hand-left"></span>
            <span class="icon-hand-left"></span> Please select from the menu on the left.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="footer.jsp"%></div>
  <%@include file="qqservice.jsp" %>
</body>
</html>