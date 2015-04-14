<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="../../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/mcliu/resources/css/userList.css"/>
<script type="text/javascript" src="/mcliu/resources/js/userList.js"></script>
</head>

<body>
  <div id="header"><%@include file="../../header.jsp"%></div>
  <div id="leftAndContent">
    <div id="left" class="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block"><%@include file="../../left.jsp"%></div>
    <div id="content">
      <div class="breadcrumbDiv">
        <ul class="breadcrumb">
          <li><a href="<c:url value="/index" />"><span class="icon-home"></span>首页</a></li>
          <li><a href="<c:url value="/laboratory" />"><span class="icon-beaker"></span>实验室</a></li>
          <li class="active">用户注册</li>
        </ul>
      </div>
      <div id="pULDiv" style="padding: 40px 60px;">
        注册成功！<br/>
        <h4>用户信息一览&nbsp;&nbsp;&nbsp;&nbsp;<a href="<c:url value='/laboratory' />">返回到实验室</a></h4>
          <div id="pULJSPTableDiv" class="width70percent marginTop20">
        	  <h6><b>JSP中使用&lt;c:forEach&gt;循环显示用户列表：</b></h6>
              <table border="1" class="table table-bordered table-striped" style="margin: auto;">
                <tr>
                  <table id="pULHeaderTable" border="1" class="table table-bordered table-striped" style="margin: auto;">
                    <thead>
                      <tr>
                        <th class="textAlignCenter width15percent">ID</th>
                        <th class="textAlignCenter width25percent">Email</th>
                        <th class="textAlignCenter width40percent">Password</th>
                        <th class="textAlignCenter">Nick Name</th>
                      </tr>
                    </thead>
                  </table>
                </tr>
                <tr>
                  <div style="max-height: 260px; overflow-y: auto;">
                    <table border="1" class="table table-bordered table-striped" id="pULContentTable">
                      <c:forEach items="${loginUserInfoList}" var="userInfo">
                        <tr>
                          <td class="width15percent">${userInfo.id}</td>
                          <td class="width25percent wrapByCharacter">${userInfo.loginName}</td>
                          <td class="width40percent wrapByCharacter">${userInfo.password}</td>
                          <td class="wrapByCharacter">${userInfo.name}</td>
                        </tr>
                      </c:forEach>
                    </table>
                  </div>
                </tr>
              </table>
          </div>
          <div id="pULJSTableDiv" class="width70percent marginTop20">
            <h6><b>JS中动态循环显示用户列表：</b></h6>
            <table id="pULJSTable"  border="0" class="table table-bordered table-striped tablesorter">
              <thead>
                <tr>
                  <th class="pULIdTh width15percent textAlignCenter">ID</th>
                  <th class="pULEmailTh width25percent textAlignCenter">Email</th>
                  <th class="pULPasswordTh width40percent textAlignCenter">Password</th>
                  <th class="pULNickNameTh width20percent textAlignCenter">Nick Name</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../../footer.jsp"%></div>
  <%@include file="../../qqservice.jsp"%>
</body>
</html>