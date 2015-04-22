<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<title>MCLIU | 用户一览</title>
<%@include file="../../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/resources/css/laboratory/users/userList.css"/>
<script type="text/javascript" src="/resources/js/laboratory/users/userList.js"></script>
</head>

<body onselectstart="return true;" ondragstart="return false;" onload="isHasLoad()">
  <div id="loadDiv">
    <div class="loadDiv-fix">
      <img class="load" src="/resources/img/loading/load.png" />
      <img class="loading" src="/resources/img/loading/loading.png" /> 加载中...
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
          <li class="active visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">用户一览</li>
        </ul>
      </div>
      <div id="pULDiv" style="padding: 20px 50px;">
        <h4>用户信息一览&nbsp;&nbsp;&nbsp;&nbsp;</h4>
          <div id="pULJSPTableDiv" class="width70percent marginTop20">
        	  <h6><b>静态表示：</b></h6>
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
            <h6><b>AJAX表示：</b></h6>
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