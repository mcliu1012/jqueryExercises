<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="commonImport.jsp" %>

<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<spring:url value="/resources/js/login.js" var="loginjs"></spring:url>
<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<script type="text/javascript" src="${loginjs}?<%=sysDate%>"></script>
<title>Login</title>
</head>
<body>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>Login to MCLIU's website</h1>
      <div class="successMsg">${successMsg }</div>
      <div class="errorMsg">${error }</div>
      <form id="pLogInForm" method="post" action="login">
        <p>
          <input type="text" id="loginNameInput" name="loginName" value="${loginName}" placeholder="Username or Email" autofocus>
        </p>
        <p>
          <input type="password" id="passwordInput" name="password" value="${password}" placeholder="Password">
        </p>
        <p class="remember_me">
          <label>
          	<c:set var="checkFlag" value="${'on' == keepLoginName ? 'checked' : '' }"></c:set>
            <input type="checkbox" name="keepLoginName" id="keepLoginName" checked='${checkFlag}'>
            Remember me
          </label>
        </p>
        <p class="submit min-width-180">
          <button id="pLoginSignUp" type="button" class="btn btn-primary"><span class="icon-user"></span> Sign up</button>
          <button type="submit" class="btn btn-primary" name="commit"><span class="icon-signin"></span> Sign in</button>
        </p>
      </form>
      <input id="pageStatus" name="pageStatus" type="hidden" value="${pageStatus}" />
    </div>

    <div class="login-help">
      <p>
        Forgot your password? <a href="<c:url value='/passwordForget' />">Click here to reset it</a>.
      </p>
    </div>
  </section>
  <div id="pLoginRegistModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title pLoginUserRegistH4">用  户  注  册</h4>
        </div>
        <div class="modal-body">
          <div id="pLoginSuccessInfoDiv" class="alert alert-success modal-alert modal-alert-error" role="alert"></div>
          <div id="pLoginErrorMsg" class="alert alert-danger modal-alert modal-alert-error" role="alert"></div>
          <form id="pLoginForm" class="form-horizontal" action="" role="form" method="POST">

            <div class="input-group">
              <span class="input-group-addon min-width-45" id="basic-addon1"><span class="icon-envelope" aria-hidden="true"></span></span>
              <input id="pLoginEmailInput" type="email" class="form-control" placeholder="电子邮箱" aria-describedby="basic-addon1" name="loginName" autofocus>
            </div>
            <div class="input-group">
              <span class="input-group-addon min-width-45" id="basic-addon2"><span class="icon-key" aria-hidden="true"></span></span>
              <input id="pLoginPasswordInput" type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon2" name="passwordFirst">
            </div>
            <div class="input-group">
              <span class="input-group-addon min-width-45" id="basic-addon3"><span class="icon-check" aria-hidden="true"></span></span>
              <input id="pLoginPasswordConfirmInput" type="password" class="form-control" placeholder="确认密码" aria-describedby="basic-addon3" name="password">
            </div>
            <div class="input-group">
              <span class="input-group-addon min-width-45" id="basic-addon4"><span class="icon-user" aria-hidden="true"></span></span>
              <input id="pLoginNickNameInput" class="form-control" placeholder="昵称" aria-describedby="basic-addon4" name="name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">退出</button>
          <button type="reset" class="btn btn-default">重置</button>
          <button type="button" id="pLoginRegistBtn" class="btn btn-primary">注册</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

</body>
</html>