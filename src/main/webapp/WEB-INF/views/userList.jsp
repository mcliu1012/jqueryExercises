<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/jqueryExercises/resources/css/userList.css"/>
<script type="text/javascript" src="/jqueryExercises/resources/js/userList.js"></script>
</head>

<body>
  <div id="header"><%@include file="header.jsp"%></div>
  <div id="left"><%@include file="left.jsp"%></div>
  <div id="content">
    <div id="pULDiv" style="height: 100%; padding: 40px 60px;">
      注册成功！<br/>
      用户信息一览&nbsp;&nbsp;&nbsp;&nbsp;<a href="<c:url value='/validateExercise/init' />">返回到用户注册界面</a>
        <div id="pULJSPTableDiv" class="width70percent">
          <div id="pULTableTitleDiv">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th class="width15percent">ID</th>
                  <th class="width21percent">Email</th>
                  <th class="width40percent">Password</th>
                  <th class="width24percent">Nick Name</th>
<!--                   <th style="width: 129px;" class="width15percent">ID</th> -->
<!--                   <th style="width: 178px;" class="width21percent">Email</th> -->
<!--                   <th style="width: 339px;" class="width40percent">Password</th> -->
<!--                   <th style="width: 219px;" class="width24percent">Nick Name</th> -->
                </tr>
              </thead>
            </table>
          </div>
          <div id="pULTableContentDiv">
            <table id="pULJSPTable" class="table table-bordered table-striped">
              <tbody>
                  <c:forEach items="${loginUserInfoList}" var="userInfo">
                    <tr>
                      <td class="width15percent">${userInfo.id}</td>
                      <td class="width21percent wrapByCharacter">${userInfo.loginName}</td>
                      <td class="width40percent wrapByCharacter">${userInfo.password}</td>
                      <td class="width24percent wrapByCharacter">${userInfo.name}</td>
                    </tr>
                  </c:forEach>
              </tbody>
            </table>
          </div>
        </div>
        <div id="pULJSTableDiv" class="width70percent">
          <table id="pULJSTable" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th class="pULIdTh width15percent">ID</th>
                <th class="pULEmailTh width21percent">Email</th>
                <th class="pULPasswordTh width40percent">Password</th>
                <th class="pULNickNameTh width24percent">Nick Name</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
    </div>
  </div>
  <div id="footer"><%@include file="footer.jsp"%></div>
  <%@include file="qqservice.jsp"%>
</body>
</html>