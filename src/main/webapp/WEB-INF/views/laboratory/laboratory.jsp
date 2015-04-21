<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<title>MCLIU | 实验室</title>
<%@include file="../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/resources/css/laboratory/laboratory.css"/>
<script type="text/javascript" src="/resources/js/laboratory/laboratory.js"></script>
</head>

<body>
  <div id="header"><%@include file="../header.jsp"%></div>
  <div id="leftAndContent">
    <div id="left"><%@include file="../left.jsp"%></div>
    <div id="content">
      <div class="breadcrumbDiv">
        <ul class="breadcrumb">
          <li class="homeLi"><a href="<c:url value="/index" />"><span class="icon-home"></span>首页</a></li>
          <li class="active visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">实验室</li>
        </ul>
      </div>
      <div id="pLaboratoryDiv" class="padding-20 min-width-120">
        <%-- 其他用户 --%>
        <div class="row">
          <div class="widget">
            <div class="widget-header">
              <h4>其他用户</h4>
            </div>
          </div>
          <div class="col-md-3">
            <a href="<c:url value="/laboratory/userListInit" />">显示所有用户信息</a>
          </div>
        </div>
        <%-- 应用 --%>
        <div class="row margin-top-30">
          <div class="widget">
            <div class="widget-header">
              <h4>一些奇奇怪怪的应用</h4>
            </div>
          </div>
<!--           <div class="col-md-3"> -->
<!--             <div class="statbox widget box box-shadow"> -->
<!--               <div class="widget-content"> -->
<!--                 <div class="visual blue"> -->
<!--                   <i>ROLL</i> -->
<!--                 </div> -->
<!--                 <div class="title">其他</div> -->
<!--                 <div class="value">随机数</div> -->
<!--                 <a href="/app/roll/" class="more">打开<i class="pull-right icon-angle-right"></i></a> -->
<!--               </div> -->
<!--             </div> -->
<!--           </div> -->
<!--           <div class="col-md-3"> -->
<!--             <div class="statbox widget box box-shadow"> -->
<!--               <div class="widget-content"> -->
<!--                 <div class="visual blue"> -->
<!--                   <i class="fa fa-qrcode"></i> -->
<!--                 </div> -->
<!--                 <div class="title">QR CODE</div> -->
<!--                 <div class="value">生成二维码</div> -->
<!--                 <a href="/app/qrcode/" class="more">打开<i class="pull-right icon-angle-right"></i></a> -->
<!--               </div> -->
<!--             </div> -->
<!--           </div> -->
          <div class="col-md-3">
            <div class="statbox widget box box-shadow">
              <div class="widget-content">
                <div class="visual blue">
                  <i class="icon-cogs"></i>
                </div>
                <div class="title">Network Tools</div>
                <div class="value">网络工具</div>
                <a href="/laboratory/network/" class="more">打开<i class="pull-right icon-angle-right"></i></a>
              </div>
            </div>
          </div>
<!--           <div class="col-md-3"> -->
<!--             <div class="statbox widget box box-shadow"> -->
<!--               <div class="widget-content"> -->
<!--                 <div class="visual blue"> -->
<!--                   <i class="fa fa-usd"></i> -->
<!--                 </div> -->
<!--                 <div class="title">金融</div> -->
<!--                 <div class="value">汇率换算</div> -->
<!--                 <a href="#" target="_blank" class="more">打开<i class="pull-right icon-angle-right"></i></a> -->
<!--               </div> -->
<!--             </div> -->
<!--           </div> -->
        </div>

      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../footer.jsp"%></div>
  <%@include file="../qqservice.jsp"%>
</body>
</html>