<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ page session='true'%>
<%
    request.setCharacterEncoding("UTF-8");
%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="${baseUrl}/css/validateExercise.css"/>
<script type="text/javascript" src="${baseUrl}/js/validateExercise.js"></script>
</head>

<body>
  <div id="header"><%@include file="header.jsp"%></div>
  <div id="left"><%@include file="left.jsp"%></div>
  <div id="content">
    <div id="pVEDiv" style="height: 100%;">
      <form id="pVEForm" class="form-horizontal" role="form">
        <div class="form-group">
          <label for="pVEEmailInput" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="pVEEmailInput" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <label for="pVEPasswordInput" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pVEPasswordInput" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <label for="pVENickNameInput" class="col-sm-2 control-label">Nick Name</label>
          <div class="col-sm-10">
            <input class="form-control" id="pVENickNameInput" placeholder="Nick Name">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="reset" class="btn btn-default">Clear</button>
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div id="footer"><%@include file="footer.jsp"%></div>
  <%@include file="qqservice.jsp"%>
</body>
</html>