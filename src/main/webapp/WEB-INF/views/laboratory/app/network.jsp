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
          <li class="homeLi"><a href="<c:url value="/" />"><span class="icon-home"></span>首页</a></li>
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
                <label class="col-sm-3 control-label">您的本机 IP：</label>
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
              <div class="col-sm-12 textAlignCenter">IP 查询结果：</div>
              <div class="col-sm-12 textAlignCenter padding-top-10"><span class="span-ip-address"></span></div>
            </div>
          </div>
        </div>
        <%-- DNS服务器 --%>
        <div role="tabpanel" class="marginTop20 min-width-660">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist" id="dnsTab">
            <li role="presentation" class="active"><a href="#commonDNS" aria-controls="commonDNS" role="tab" data-toggle="tab">公共 DNS 服务器</a></li>
            <li role="presentation"><a href="#ctccDNS" aria-controls="ctccDNS" role="tab" data-toggle="tab">全国电信 DNS 服务器</a></li>
            <li role="presentation"><a href="#cuccDNS" aria-controls="cuccDNS" role="tab" data-toggle="tab">全国联通 DNS 服务器</a></li>
            <li role="presentation"><a href="#appleTVDNS" aria-controls="appleTVDNS" role="tab" data-toggle="tab">Apple TV DNS 服务器</a></li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <%-- 公共 DNS 服务器 --%>
            <div role="tabpanel" class="tab-pane fade in active padding-15" id="commonDNS">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="icon-reorder"></i> 公共 DNS 服务器
                  </h3>
                </div>
                <div class="panel-body">
                  <table class="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th>名称</th>
                        <th>服务器 IP 地址</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>阿里 AliDNS</td>
                        <td>223.5.5.5</td>
                        <td>223.6.6.6</td>
                      </tr>
                      <tr>
                        <td>CNNIC SDNS</td>
                        <td>1.2.4.8</td>
                        <td>210.2.4.8</td>
                      </tr>
                      <tr>
                        <td>114 DNS</td>
                        <td>114.114.114.114</td>
                        <td>114.114.115.115</td>
                      </tr>
                      <tr>
                        <td>oneDNS</td>
                        <td>112.124.47.27</td>
                        <td>114.215.126.16</td>
                      </tr>
                      <tr>
                        <td>DNS 派 电信/移动/铁通</td>
                        <td>101.226.4.6</td>
                        <td>218.30.118.6</td>
                      </tr>
                      <tr>
                        <td>DNS 派 联通</td>
                        <td>123.125.81.6</td>
                        <td>140.207.198.6</td>
                      </tr>
                      <tr>
                        <td>Google DNS</td>
                        <td>8.8.8.8</td>
                        <td>8.8.4.4</td>
                      </tr>
                      <tr>
                        <td>OpenDNS</td>
                        <td>208.67.222.222</td>
                        <td>208.67.220.220</td>
                      </tr>
                      <tr>
                        <td>V2EX DNS</td>
                        <td>199.91.73.222</td>
                        <td>178.79.131.110</td>
                      </tr>
                      <tr>
                        <td>OpenerDNS</td>
                        <td>42.120.21.30</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <%-- 全国各地电信 DNS 服务器 --%>
            <div role="tabpanel" class="tab-pane fade padding-15" id="ctccDNS">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="icon-reorder"></i> 全国电信 DNS 服务器
                  </h3>
                </div>
                <div class="panel-body">
                  <table class="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th>名称</th>
                        <th>服务器 IP 地址</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>安徽电信 DNS</td>
                        <td>61.132.163.68</td>
                        <td>202.102.213.68</td>
                      </tr>
                      <tr>
                        <td>北京电信 DNS</td>
                        <td>219.141.136.10</td>
                        <td>219.141.140.10</td>
                      </tr>
                      <tr>
                        <td>重庆电信 DNS</td>
                        <td>61.128.192.68</td>
                        <td>61.128.128.68</td>
                      </tr>
                      <tr>
                        <td>福建电信 DNS</td>
                        <td>218.85.152.99</td>
                        <td>218.85.157.99</td>
                      </tr>
                      <tr>
                        <td>甘肃电信 DNS</td>
                        <td>202.100.64.68</td>
                        <td>61.178.0.93</td>
                      </tr>
                      <tr>
                        <td>广东电信 DNS</td>
                        <td>202.96.128.86</td>
                        <td>202.96.128.166</td>
                      </tr>
                      <tr>
                        <td>广西电信 DNS</td>
                        <td>202.103.225.68</td>
                        <td>202.103.224.68</td>
                      </tr>
                      <tr>
                        <td>贵州电信 DNS</td>
                        <td>202.98.192.67</td>
                        <td>202.98.198.167</td>
                      </tr>
                      <tr>
                        <td>河南电信 DNS</td>
                        <td>222.88.88.88</td>
                        <td>222.85.85.85</td>
                      </tr>
                      <tr>
                        <td>黑龙江电信 DNS</td>
                        <td>219.147.198.230</td>
                        <td>219.147.198.242</td>
                      </tr>
                      <tr>
                        <td>湖北电信 DNS</td>
                        <td>202.103.24.68</td>
                        <td>202.103.0.68</td>
                      </tr>
                      <tr>
                        <td>湖南电信 DNS</td>
                        <td>222.246.129.80</td>
                        <td>59.51.78.211</td>
                      </tr>
                      <tr>
                        <td>江苏电信 DNS</td>
                        <td>218.2.2.2</td>
                        <td>218.4.4.4</td>
                      </tr>
                      <tr>
                        <td>江西电信 DNS</td>
                        <td>202.101.224.69</td>
                        <td>202.101.226.68</td>
                      </tr>
                      <tr>
                        <td>内蒙古电信 DNS</td>
                        <td>219.148.162.31</td>
                        <td>222.74.39.50</td>
                      </tr>
                      <tr>
                        <td>山东电信 DNS</td>
                        <td>219.146.0.130</td>
                        <td>219.150.32.132</td>
                      </tr>
                      <tr>
                        <td>陕西电信 DNS</td>
                        <td>218.30.19.40</td>
                        <td>61.134.1.4</td>
                      </tr>
                      <tr>
                        <td>上海电信 DNS</td>
                        <td>202.96.209.133</td>
                        <td>116.228.111.118</td>
                      </tr>
                      <tr>
                        <td>四川电信 DNS</td>
                        <td>61.139.2.69</td>
                        <td>218.6.200.139</td>
                      </tr>
                      <tr>
                        <td>天津电信 DNS</td>
                        <td>219.150.32.132</td>
                        <td>219.146.0.132</td>
                      </tr>
                      <tr>
                        <td>云南电信 DNS</td>
                        <td>222.172.200.68</td>
                        <td>61.166.150.123</td>
                      </tr>
                      <tr>
                        <td>浙江电信 DNS</td>
                        <td>202.101.172.35</td>
                        <td>61.153.177.196</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <%-- 全国各地联通 DNS 服务器 --%>
            <div role="tabpanel" class="tab-pane fade padding-15" id="cuccDNS">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="icon-reorder"></i> 全国联通 DNS 服务器
                  </h3>
                </div>
                <div class="panel-body">
                  <table class="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th>名称</th>
                        <th>服务器 IP 地址</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>北京联通 DNS</td>
                        <td>202.106.196.115</td>
                        <td>202.106.46.151</td>
                      </tr>
                      <tr>
                        <td>重庆联通 DNS</td>
                        <td>221.5.203.98</td>
                        <td>221.7.92.98</td>
                      </tr>
                      <tr>
                        <td>广东联通 DNS</td>
                        <td>210.21.196.6</td>
                        <td>221.5.88.88</td>
                      </tr>
                      <tr>
                        <td>河北联通 DNS</td>
                        <td>202.99.160.68</td>
                        <td>202.99.166.4</td>
                      </tr>
                      <tr>
                        <td>河南联通 DNS</td>
                        <td>202.102.224.68</td>
                        <td>202.102.227.68</td>
                      </tr>
                      <tr>
                        <td>黑龙江联通 DNS</td>
                        <td>202.97.224.69</td>
                        <td>202.97.224.68</td>
                      </tr>
                      <tr>
                        <td>吉林联通 DNS</td>
                        <td>202.98.0.68</td>
                        <td>202.98.5.68</td>
                      </tr>
                      <tr>
                        <td>江苏联通 DNS</td>
                        <td>221.6.4.66</td>
                        <td>221.6.4.67</td>
                      </tr>
                      <tr>
                        <td>内蒙古联通 DNS</td>
                        <td>202.99.224.68</td>
                        <td>202.99.224.8</td>
                      </tr>
                      <tr>
                        <td>山东联通 DNS</td>
                        <td>202.102.128.68</td>
                        <td>202.102.152.3</td>
                      </tr>
                      <tr>
                        <td>山西联通 DNS</td>
                        <td>202.99.192.66</td>
                        <td>202.99.192.68</td>
                      </tr>
                      <tr>
                        <td>陕西联通 DNS</td>
                        <td>221.11.1.67</td>
                        <td>221.11.1.68</td>
                      </tr>
                      <tr>
                        <td>上海联通 DNS</td>
                        <td>210.22.70.3</td>
                        <td>210.22.84.3</td>
                      </tr>
                      <tr>
                        <td>四川联通 DNS</td>
                        <td>119.6.6.6</td>
                        <td>124.161.87.155</td>
                      </tr>
                      <tr>
                        <td>天津联通 DNS</td>
                        <td>202.99.104.68</td>
                        <td>202.99.96.68</td>
                      </tr>
                      <tr>
                        <td>浙江联通 DNS</td>
                        <td>221.12.1.227</td>
                        <td>221.12.33.227</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <%-- Apple TV DNS 服务器 --%>
            <div role="tabpanel" class="tab-pane fade padding-15" id="appleTVDNS">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="icon-reorder"></i> Apple TV DNS 服务器
                  </h3>
                </div>
                <div class="panel-body">
                  <table class="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th>名称</th>
                        <th>服务器 IP 地址</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>上海电信</td>
                        <td>180.153.225.136</td>
                      </tr>
                      <tr>
                        <td>杭州电信</td>
                        <td>115.29.189.118</td>
                      </tr>
                      <tr>
                        <td>广东电信</td>
                        <td>203.195.182.150</td>
                      </tr>
                      <tr>
                        <td>北方联通</td>
                        <td>118.244.224.124</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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