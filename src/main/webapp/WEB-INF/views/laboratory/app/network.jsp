<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page session='true'%>
<%@ page contentType='text/html;charset=UTF-8' pageEncoding='UTF-8'%>
<title>MCLIU | 网络工具</title>
<%@include file="../../commonImport.jsp"%>
<link rel="stylesheet" type="text/css" href="/resources/css/laboratory/app/network.css"/>
<script type="text/javascript" src="/resources/js/laboratory/app/network.js"></script>
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
          <li class="active visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">网络工具</li>
        </ul>
      </div>
      <div id="pNetworkDiv" class="padding-20 min-width-120">
        <%-- 查询IP地址 --%>
        <div id="pNetIpAddress" class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"><i class="icon-signal"></i> 网络工具</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">本机 IP：</label>
                <label class="col-sm-3 control-label"><code class="code-host-ip">${hostIp }</code></label>
                <label class="col-sm-6 control-label"><span class="span-host-address">${hostAddress }</span></label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">IP 地址：</label>
                <div class="col-sm-3">
                  <input class="form-control textAlignCenter" id="input-check-ip" placeholder="请输入IP地址" autofocus>
                </div>
                <div class="col-sm-2">
                  <button id="btn-check-ip" type="button" class="btn btn-primary btn-block">查询</button>
                </div>
              </div>
            </form>
            <div class="ip-address-result col-sm-12">
              <div class="col-sm-12 textAlignCenter">查询 IP 的详细地址：</div>
              <div class="col-sm-12 textAlignCenter padding-top-10"><span class="span-ip-address"></span></div>
            </div>
          </div>
        </div>
        <%-- DNS服务器 --%>
        <div role="tabpanel" class="marginTop20">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist" id="dnsTab">
            <li role="presentation" class="active"><a href="#commonDNS" aria-controls="commonDNS" role="tab"
              data-toggle="tab">公共 DNS 服务器</a></li>
            <li role="presentation"><a href="#ctccDNS" aria-controls="ctccDNS" role="tab" data-toggle="tab">全国各地电信 DNS 服务器</a></li>
            <li role="presentation"><a href="#cuccDNS" aria-controls="cuccDNS" role="tab" data-toggle="tab">全国各地联通 DNS 服务器</a></li>
            <li role="presentation"><a href="#appleTVDNS" aria-controls="appleTVDNS" role="tab" data-toggle="tab">Apple TV DNS 服务器</a></li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="commonDNS">公共 DNS 服务器</div>
            <div role="tabpanel" class="tab-pane fade" id="ctccDNS">全国各地电信 DNS 服务器</div>
            <div role="tabpanel" class="tab-pane fade" id="cuccDNS">全国各地联通 DNS 服务器</div>
            <div role="tabpanel" class="tab-pane fade" id="appleTVDNS">Apple TV DNS 服务器</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="footer"><%@include file="../../footer.jsp"%></div>
  <%@include file="../../qqservice.jsp"%>
</body>
</html>