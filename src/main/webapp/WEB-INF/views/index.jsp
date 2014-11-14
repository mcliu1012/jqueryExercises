<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="icon" href="/jqueryExercises/resources/img/favicon/favicon.ico" type="image/vnd.microsoft.icon">
<link rel="shortcut icon" href="/jqueryExercises/resources/img/favicon/favicon.ico" type="image/vnd.microsoft.icon">

<%@ page session='true'%>
<% request.setCharacterEncoding("UTF-8"); %>
<% String sysDate = (new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date())); %>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@ taglib uri='http://www.springframework.org/tags' prefix='spring'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<spring:url value='resources/css/common/common.css' var='commoncss' />
<spring:url value='resources/css/lib/jquery-ui.css' var='jqueryuicss' />
<spring:url value='resources/css/lib/bootstrap.css' var='bootstrapcss' />
<spring:url value='resources/css/lib/bootstrap-responsive.css' var='bootstrapresponsivecss' />
<spring:url value='resources/css/lib/select2.css' var='select2css' />
<spring:url value='resources/css/lib/bootstrap-datetimepicker.min.css' var='bootstrapdatepickercss' />
<spring:url value='resources/css/lib/bootstrap-slider.css' var='bootstrapslidercss' />
<spring:url value='resources/css/index.css' var='indexcss' />

<spring:url value='resources/js/lib/jquery-1.11.0.min.js' var='jquery' />
<spring:url value='resources/js/lib/jquery-migrate-1.2.1.min.js' var='jquerymigrate' />
<spring:url value='resources/js/lib/jquery.cookie.js' var='jquerycookie' />
<spring:url value='resources/js/lib/jquery-ui.js' var='jqueryui' />
<spring:url value='resources/js/lib/bootstrap.js' var='bootstrapjs' />
<spring:url value='resources/js/lib/jquery.validate.min.js' var='validatejs' />
<spring:url value='resources/js/lib/bootstrap-datetimepicker.min.js' var='bootstrapdatepickerjs' />
<spring:url value='resources/js/lib/jquery.dialogextend.min.js' var='dialogextendjs' />
<spring:url value='resources/js/lib/jquery.html5jpMeterPolyfill.js' var='html5jpMeterPolyfilljs' />
<spring:url value='resources/js/lib/select2.js' var='select2js' />
<spring:url value='resources/js/lib/bootstrap-slider.js' var='bootstrapsliderjs' />
<spring:url value='resources/js/lib/jquery.mousewheel.min.js' var='jquerymousewheelminjs' />
<spring:url value='resources/js/common/common.js' var='commonjs' />

<link media='screen' rel='stylesheet' href='${jqueryuicss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapcss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapresponsivecss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${commoncss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapdatepickercss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${bootstrapslidercss}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${select2css}?<%= sysDate %>' type='text/css' />
<link media='screen' rel='stylesheet' href='${indexcss}?<%= sysDate %>' type='text/css' />

<script type='text/javascript' src='${jquery}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jquerymigrate}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jquerycookie}?<%= sysDate %>'></script>
<script type='text/javascript' src='${validatejs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${bootstrapdatepickerjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jqueryui}?<%= sysDate %>'></script>
<script type='text/javascript' src='${bootstrapjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${dialogextendjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${html5jpMeterPolyfilljs}?<%= sysDate %>' charset="UTF-8"></script>
<script type='text/javascript' src='${select2js}?<%= sysDate %>'></script>
<script type='text/javascript' src='${bootstrapsliderjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${jquerymousewheelminjs}?<%= sysDate %>'></script>
<script type='text/javascript' src='${commonjs}?<%= sysDate %>'></script>

<title>Login successfully!</title>
</head>
<body style="font-size:30px;">
  <div class="container">
	<h2 class="inlineBlock">登陆成功！！！</h2>
    <a class="btn floatRight logoutA" href="<c:url value='/logout' />">返回到Login页面</a>
  </div>
</body>
</html>