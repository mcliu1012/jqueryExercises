<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/jqueryExercises/resources/css/game/game.css"/>
<script type="text/javascript" src="/jqueryExercises/resources/js/game/game.js"></script>
</head>

<body>
  <div id="header"><%@include file="../header.jsp"%></div>
  <div id="left"><%@include file="../left.jsp"%></div>
  <div id="content">
    <div id="pGameOutDiv" style="height: 100%;" class="container">
      <div class="row margin-top-30">
        <div class="col-md-4">
          <div class="statbox widget box box-shadow">
            <div class="widget-content">
              <div class="visual red">
                <i class="fa fa-gamepad"></i>
              </div>
              <div class="title">2048</div>
              <div class="value">2048</div>
              <a href="/game/2048/" class="more">进入游戏<i class="pull-right icon-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../footer.jsp"%></div>
  <%@include file="../qqservice.jsp"%>
</body>
</html>