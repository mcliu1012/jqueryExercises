<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1">
<meta name="description"
	content="Example of Fluid Layout with Bootstrap version 2.0">
<meta name="author" content="">
<title>Example of Fluid Layout with Bootstrap version 2.0</title>

<!-- Le styles -->
<link href="/mcliu/resources/css/bootstrap/bootstrap.css" rel="stylesheet">
<link href="/mcliu/resources/css/bootstrap/example-fluid-layout.css" rel="stylesheet">

<script type="text/javascript" src="/mcliu/resources/js/lib/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="/mcliu/resources/js/bootstrap/bootstrap.js"></script>
<script type="text/javascript"
	src="/mcliu/resources/js/bootstrap/bootstrap-fluid-layout.js"></script>
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="leaderboard">
				<h1>欢迎来扰网</h1>
				<p>珍爱红娘，帮你牵手你的幸福。快来看一下我们网站的VIP中P吧！</p>
			</div>
			<div class="membersAllDiv">
				<div class="row-fluid conditionParentDiv" style="width:auto">
					<div class="span6">
						<div class="members" style="float: left;">
							身份： <select class="selectbox" id="roleSelect">
								<option>请选择TA的身份</option>
								<option value="0">普通会员</option>
								<option value="1">VIP中P</option>
							</select>
						</div>
					</div>
					<div class="span6">
						<div class="members" style="float: right;">
							价位： <select class="selectbox" id="priceSelect"
								disabled="disabled">
								<option>请选择TA的价位</option>
								<option value="0">1毛6分8</option>
								<option value="1">2毛7分5</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="memberOutDiv">
				<div class="row-fluid memberParentDiv">
					<div class="span4 memberOverlap memberOverlapFirst" id="yzxDiv">
						<div class="memberDiv memberInfo-cantSelect topDiv">
							<div class="memberInDiv">
								<h2 class="dimmedWord h2Shoppingcar">于兆新</h2>
								<p>性别：男</p>
								<p>身高：180cm</p>
								<p>体重：80kg</p>
								<p class="alipayP">
									<a class="btn btn-success btn-large disabled btnShoppingcar">加入购物车</a>
								</p>
							</div>
						</div>
						<div class="memberDiv shadowDesignAnder-cantSelect shadowDiv"></div>
					</div>
					<div class="span4 memberOverlap memberOverlapNotFirst" id="dwxDiv">
						<div class="memberDiv memberInfo-cantSelect topDiv">
							<div class="memberInDiv">
								<h2 class="dimmedWord h2NotShoppingcar">邓文新</h2>
								<p>性别：女</p>
								<p>身高：170cm</p>
								<p>体重：70kg</p>
								<p class="alipayP">
									<a class="btn btn-success btn-large disabled btnNotShoppingcar">一睹真容</a>
								</p>
							</div>
						</div>
						<div class="memberDiv shadowDesignAnder-cantSelect shadowDiv"></div>
					</div>
					<div class="span4 memberOverlap memberOverlapNotFirst" id="ljDiv">
						<div class="memberDiv memberInfo-cantSelect topDiv">
							<div class="memberInDiv">
								<h2 class="dimmedWord h2NotShoppingcar">劉佳</h2>
								<p>性别：都行</p>
								<p>身高：160cm</p>
								<p>体重：60kg</p>
								<p class="alipayP">
									<a class="btn btn-success btn-large disabled btnNotShoppingcar">拿钱砸死他</a>
								</p>
							</div>
						</div>
						<div class="memberDiv shadowDesignAnder-cantSelect shadowDiv"></div>
					</div>
				</div>
			</div>
			<hr>
			<footer>
			<p>Copyright &copy; 2014 MicroAd.LJ, Inc. All Rights Reserved.</p>
			</footer>
		</div>
	</div>

	<!-- 各Modal -->
	<div class="modal hide fade modalDiv" id="orderModal" tabindex="-1"
		role="dialog" style="display: none">
		<div class="modal-header">
			<button class="close" type="button" data-dismiss="modal">×</button>
			<h3>友情提示</h3>
		</div>
		<div class="modal-body">
			<p>真的要把这个大块头放进购物车么？</p>
		</div>
		<div class="modal-footer">
			<a class="btn" id="btnCancel">算了</a> <a class="btn btn-primary"
				id="btnOK">真的</a>
		</div>
	</div>

    <div class="modal hide fade modalDiv" id="donateModal" tabindex="-1" role="dialog" style="display: none">
      <div class="modal-header">
        <button class="close" type="button" data-dismiss="modal">×</button>
        <h3>捐赠</h3>
      </div>
      <div class="modal-body">
        <div class="textAlignCenter">
          <p style="font-size: 15px;"><strong>非常感谢您的支持，请使用支付宝钱包扫描下方的二维码，以完成捐赠！</strong></p>
          <img alt="QR Code" src="../resources/img/QR_Code.png">
        </div>
      </div>
      <div class="modal-footer">
        <a class="btn" id="btnDonateCancel">后悔了</a>
      </div>
    </div>

  <!-- bootstrap模态对话框 -->
	<div class="modal hide fade" id="photoModal" tabindex="-1"
		role="dialog" style="display: none">
		<div class="modal-header">
			<button class="close" type="button" data-dismiss="modal">×</button>
			<h3>写真集</h3>
		</div>
		<div class="modal-body padding0">
			<!-- bootstrap轮播 -->
			<div id="myCarousel" class="carousel slide myCarousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class=""></li>
					<li data-target="#myCarousel" data-slide-to="1" class=""></li>
					<li data-target="#myCarousel" data-slide-to="2" class="active"></li>
				</ol>
				<div class="carousel-inner">
					<div class="item">
						<img src="/mcliu/resources/img/bootstrap/Skiing.jpg" alt="">
						<div class="carousel-caption">
							<h4>弓长岭滑雪</h4>
							<p>高山滑雪分三步，第一步你要会滑雪；第二步你要学会从高处往下滑；第三步也是最重要的一步，你一定要学会架着拐走路。。。</p>
						</div>
					</div>
					<div class="item">
						<img src="/mcliu/resources/img/bootstrap/GSZ.jpg" alt="">
						<div class="carousel-caption">
							<h4>铁岭拓展训练</h4>
							<p>手里捧着本次拓展训练的毕业证书，脸上笑开了花。我只想说，明年我还来！</p>
						</div>
					</div>
					<div class="item active">
						<img src="/mcliu/resources/img/bootstrap/FHS.jpg" alt="">
						<div class="carousel-caption">
							<h4>丹东凤凰山</h4>
							<p>猛然间，我又相信爱情了。</p>
						</div>
					</div>
				</div>
				<a class="left carousel-control" href="#myCarousel"
					data-slide="prev">‹</a> <a class="right carousel-control"
					href="#myCarousel" data-slide="next">›</a>
			</div>
		</div>
		<div class="modal-footer">
			<a class="btn" id="btnPhotoCancel">累觉不爱</a>
		</div>
	</div>

	<div class="container">
		<div class="row-fluid">
			<div class="span12 alertOutDiv">
				<!-- bootstrap警告框 -->
				<div class="alert alert-error fade in" id="alertDiv"
					style="display: none;">
					<a class="close" data-dismiss="alert">×</a> <strong>系统错误!</strong>
					对不起，此人太肥, 购物车已报废.-_-\\\
				</div>
			</div>
		</div>
	</div>
</body>
</html>