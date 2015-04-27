<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<title>MCLIU | 二维码</title>
<%@include file="../../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/resources/css/laboratory/app/qrcode.css"/>
<script type="text/javascript" src="/resources/js/laboratory/app/qrcode.js"></script>
</head>

<body>
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
          <li class="active visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">二维码</li>
        </ul>
      </div>
      <div id="pQRCodeDiv" class="padding-20 min-width-120">
        <%-- 查询IP地址 --%>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"><i class="icon-qrcode"></i> QR Code</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">文字 或 网址：</label>
                <div class="col-sm-4">
                  <input id="input-qr-content" class="form-control" autofocus>
                </div>
                <div class="col-sm-2">
                  <button type="button" id="btn-qr-generate" class="btn btn-primary btn-block">生成二维码</button>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">宽度：</label>
                <div class="col-sm-2">
                  <input id="input-qr-width" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">高度：</label>
                <div class="col-sm-2">
                  <input id="input-qr-height" class="form-control">
                </div>
              </div>
            </form>
            <div class="col-sm-12 textAlignCenter">
              <div class="div-qr-code">
                <img id="img-qrcode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../../footer.jsp"%></div>
  <%@include file="../../qqservice.jsp"%>
</body>
</html>