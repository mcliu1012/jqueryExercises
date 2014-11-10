<!DOCTYPE html>
<html lang='en'>
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ taglib uri='http://www.springframework.org/tags' prefix='spring'%>
<% String sysDate = new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date()); %>
<spring:url value="/resources/css/login.css" var="logincss"></spring:url>
<link rel="stylesheet" type="text/css" href='${logincss}?<%=sysDate%>'>
<title>Login</title>
</head>
<body>
    <div id="loginContentDiv">
    	<form action="index" method="POST">
            <table id="loginTbl">
              <tbody>
                <tr>
                  <td>用户名：</td>
                  <td><input type="text" name="loginName"/></td>
                </tr>
                <tr>
                  <td>密&nbsp;&nbsp;码&nbsp;：</td>
                  <td><input type="password" name="password"/></td>
                </tr>
                <tr>
                  <td colspan="2" class="textAlignCenter"><input type="submit" value="Login"/></td>
                </tr>
              </tbody>
            </table>
    	</form>
    </div>
</body>
</html>