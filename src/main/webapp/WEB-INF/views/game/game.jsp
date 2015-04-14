<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<%@include file="../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/mcliu/resources/css/game/game.css"/>
<script type="text/javascript" src="/mcliu/resources/js/game/game.js"></script>
</head>

<body>
  <div id="header"><%@include file="../header.jsp"%></div>
  <div id="leftAndContent">
    <div id="left" class="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block"><%@include file="../left.jsp"%></div>
    <div id="content">
      <div class="breadcrumbDiv">
        <ul class="breadcrumb">
          <li><a href="<c:url value="index" />"><span class="icon-home"></span>首页</a></li>
          <li class="active">Game</li>
        </ul>
      </div>
      <div id="pGameOutDiv" class="container" style="width:100%;">
        <div class="row margin-top-30">
          <div class="col-md-4">
            <div class="statbox widget box box-shadow">
              <div class="widget-content">
                <div class="visual">
                    <img id="pGame2048Img" alt="2048" src="/mcliu/resources/img/2048.png" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="一款风靡全球的数字类游戏，赶快来玩吧！">
                </div>
                <div class="title">2048</div>
                <div class="value">2048</div>
                <a href="<c:url value='/game/2048' />" target="_blank" class="more">进入游戏<i class="pull-right icon-angle-right"></i></a>
              </div>
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