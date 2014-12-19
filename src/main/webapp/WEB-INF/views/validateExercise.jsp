<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/jqueryExercises/resources/css/validateExercise.css"/>
<script type="text/javascript" src="/jqueryExercises/resources/js/validateExercise.js"></script>
</head>

<body>
  <div id="header"><%@include file="header.jsp"%></div>
  <div id="left"><%@include file="left.jsp"%></div>
  <div id="content">
    <div id="pVEDiv" style="height: 100%;">
      <div id="pVEErrorMsg" class="alert alert-danger modal-alert modal-alert-error" role="alert"></div>
      <form id="pVEForm" class="form-horizontal" action="" role="form" method="POST">
        <div class="form-group">
          <label for="pVEEmailInput" class="col-sm-2 control-label">电子邮箱：</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="pVEEmailInput" placeholder="Email" name="loginName">
          </div>
        </div>
        <div class="form-group">
          <label for="pVEPasswordInput" class="col-sm-2 control-label">密码：</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pVEPasswordInput" placeholder="Password" name="passwordFirst">
          </div>
        </div>
        <div class="form-group">
          <label for="pVEPasswordConfirmInput" class="col-sm-2 control-label">确认密码：</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pVEPasswordConfirmInput" placeholder="Confirm Password" name="password">
          </div>
        </div>
        <div class="form-group">
          <label for="pVENickNameInput" class="col-sm-2 control-label">昵称：</label>
          <div class="col-sm-10">
            <input class="form-control" id="pVENickNameInput" placeholder="Nick Name" name="name">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="reset" id="pVEResetBtn" class="btn btn-default">重置</button>
            <button type="button" id="pVESignUpBtn" class="btn btn-primary">注册</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div id="footer"><%@include file="footer.jsp"%></div>
  <%@include file="qqservice.jsp"%>
</body>
</html>