<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<script type="text/javascript" src="/resources/js/laboratory/userRegist.js"></script>
<div id="pVESuccessInfoDiv" class="alert alert-success modal-alert modal-alert-error pVEAlert" role="alert"></div>
<div id="pVEErrorMsg" class="alert alert-danger modal-alert modal-alert-error pVEAlert" role="alert"></div>
<div class="pVETitle">
  <h2>用户注册</h2>
</div>
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
      <input type="password" class="form-control" id="pVEPasswordConfirmInput" placeholder="Confirm Password"
        name="password">
    </div>
  </div>
  <div class="form-group">
    <label for="pVENickNameInput" class="col-sm-2 control-label">昵称：</label>
    <div class="col-sm-10">
      <input class="form-control" id="pVENickNameInput" placeholder="Nick Name" name="name">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <button type="reset" id="pVEResetBtn" class="btn btn-default">重置</button>
      <button type="button" id="pVESignUpBtn" class="btn btn-primary">注册</button>
    </div>
  </div>
</form>