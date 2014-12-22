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
    <div id="pVEDiv" style="height: 100%;">
      <div id="pULSuccessInfoDiv" class="alert alert-success modal-alert modal-alert-error" role="alert"></div>
      注册成功！<br/>
      用户信息一览页面<a href="<c:url value='/validateExercise/init' />">返回到用户注册界面</a>
<!--       <table border="1" cellspacing="0" cellpadding="0"> -->
<!--         <thead> -->
<!--           <tr> -->
<!--             <td>ID</td> -->
<!--             <td>Email</td> -->
<!--             <td>Password</td> -->
<!--             <td>Nick Name</td> -->
<!--           </tr> -->
<!--         </thead> -->
<!--         <tbody> -->
<%--             <c:forEach items="${loginUserInfoList}" var="info"> --%>
<!--               <tr> -->
<%--                 <td>${info.id}</td> --%>
<%--                 <td>${info.loginName}</td> --%>
<%--                 <td>${info.password}</td> --%>
<%--                 <td>${info.name}</td> --%>
<!--               </tr> -->
<%--             </c:forEach> --%>
<!--         </tbody> -->
<!--       </table> -->
        <table id="pULTable">
          <tbody>
          </tbody>
        </table>
    </div>
  </div>
  <div id="footer"><%@include file="footer.jsp"%></div>
  <%@include file="qqservice.jsp"%>
</body>
</html>