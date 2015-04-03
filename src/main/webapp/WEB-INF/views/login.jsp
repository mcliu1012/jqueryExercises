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
  <div id="pLoginSignUp"><button type="button" class="btn btn-primary btn-lg">Sign up</button></div>
  <section class="pLoginSectionContainer">
    <div class="login">
      <h1>Login to MCLIU's website</h1>
      <div class="successMsg">${successMsg }</div>
      <div class="errorMsg">${error }</div>
      <form method="post" action="login">
        <p>
          <input type="text" id="loginNameInput" name="loginName" value="${loginName}" placeholder="Username or Email" autofocus>
        </p>
        <p>
          <input type="password" name="password" value="${password}" placeholder="Password">
        </p>
        <p class="remember_me">
          <label>
          	<c:set var="checkFlag" value="${'on' == keepLoginName ? 'checked' : '' }"></c:set>
            <input type="checkbox" name="keepLoginName" id="keepLoginName" checked='${checkFlag}'>
            Remember me on this computer
          </label>
        </p>
        <p class="submit">
          <input type="submit" class="loginCursorPointer" name="commit" value="Login">
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
          <h4 class="modal-title">用  户  注  册</h4>
        </div>
        <div class="modal-body">
          <div id="pLoginSuccessInfoDiv" class="alert alert-success modal-alert modal-alert-error" role="alert"></div>
          <div id="pLoginErrorMsg" class="alert alert-danger modal-alert modal-alert-error" role="alert"></div>
          <form id="pLoginForm" class="form-horizontal" action="" role="form" method="POST">
            <div class="form-group">
              <label for="pLoginEmailInput" class="col-sm-2 control-label">电子邮箱：</label>
              <div class="col-sm-10 width330px">
                <input type="email" class="form-control" id="pLoginEmailInput" placeholder="Email" name="loginName" autofocus>
              </div>
            </div>
            <div class="form-group">
              <label for="pLoginPasswordInput" class="col-sm-2 control-label">密码：</label>
              <div class="col-sm-10 width330px">
                <input type="password" class="form-control" id="pLoginPasswordInput" placeholder="Password"
                  name="passwordFirst">
              </div>
            </div>
            <div class="form-group">
              <label for="pLoginPasswordConfirmInput" class="col-sm-2 control-label">确认密码：</label>
              <div class="col-sm-10 width330px">
                <input type="password" class="form-control" id="pLoginPasswordConfirmInput" placeholder="Confirm Password"
                  name="password">
              </div>
            </div>
            <div class="form-group">
              <label for="pLoginNickNameInput" class="col-sm-2 control-label">昵称：</label>
              <div class="col-sm-10 width330px">
                <input class="form-control" id="pLoginNickNameInput" placeholder="Nick Name" name="name">
              </div>
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