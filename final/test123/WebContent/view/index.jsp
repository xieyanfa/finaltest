<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>管理系统</title>
<%@ include file="./commom/commonTag.jsp"%><!-- 引入公共文件 -->
<link  href="${ctx }/static/css/manager.css" rel="stylesheet"><!-- 引入样式表 -->
<script src="${ctx }/static/js/index.js"></script><!-- 引入js文件 -->
<link rel="stylesheet"
	href="${ctx }/static/plugins/layuiadmin/layui/css/layui.css"
	media="all">
<link rel="stylesheet"
	href="${ctx }/static/plugins/layuiadmin/style/admin.css" media="all">
<script type="text/javascript" src="${ctx }/static/js/jquery/jquery.lightbox_me.js"></script>
<link rel="stylesheet" href="${ctx }/static/css/layout.css"> 
<style type="text/css">
.layui-side-menu .layui-nav .layui-nav-item a {
    padding-left: 15px;
    padding-top: 0px;
    padding-bottom: 0px;
}
body,html{
	height: 98%;
	width: 100%;
	background-image: url("../static/images/back.jpg");
	background-repeat: no-repeat;
	background-position: 100%;
	background-size: cover;
	
}
</style>
</head>
<body class="layui-layout-body" style="overflow: hidden">
	<div id="LAY_app">
		<div class="layui-layout layui-layout-admin">
			<div class="layui-header">
				<!-- 头部区域 -->
				<ul class="layui-nav layui-layout-left">
					<li class="layui-nav-item"><a href="javascript:;"
						layadmin-event="refresh" class="layui-icon layui-icon-refresh"></a>
					</li>
					<li class="layui-nav-item" lay-unselect><a href="javascript:;"
						layadmin-event="fullscreen"><i
							class="layui-icon layui-icon-screen-full"></i></a></li>
				</ul>
				<ul class="layui-nav layui-layout-right" lay-filter="layadmin-layout-right">
					<li class="layui-nav-item"><a onclick="logout()">安全退出</a></li>
				</ul>
			</div>
			<!-- 侧边菜单 -->
			<div class="layui-side layui-side-menu">
				<div class="layui-side-scroll">
					<div class="layui-logo" style="text-align: left;">
						<strong class="font-bold">Sign</strong>
					</div>
         			<ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu" lay-filter="layadmin-system-side-menu">
         				<li class="layui-nav-item layui-nav-itemed">
							 <a href="${ctx }/view/sign.jsp" target="iframe">打卡签到</a>
  						</li>
         				<li class="layui-nav-item layui-nav-itemed">
							<a href="${ctx }/view/user.jsp" target="iframe">用户管理</a>
						</li>
						<li class="layui-nav-item layui-nav-itemed">
							<a href="${ctx }/view/sign_info.jsp" target="iframe">签到设置</a>
						</li>
						<li class="layui-nav-item layui-nav-itemed">
							 <a href="${ctx }/view/sign_log.jsp" target="iframe">签到查询</a>
  						</li>
         			</ul>
				</div>
			</div>

		</div>

		<!-- 主体内容 -->
		<div class="layui-body" id="LAY_app_body"
			style="left: 220px;">
			<div class="layadmin-tabsbody-item layui-show">
				<iframe frameborder="0" class="layadmin-iframe" name="iframe" src="${ctx }/view/sign_log.jsp"></iframe>
			</div>
		</div>


		<!-- 确认退出窗口 -->
		<div id="confirmBox" class="popupBox">
			<div class="head">
				<div class="left">
					<span class="wtitle">确认退出</span>
				</div>
				<div class="right"></div>
			</div>
			<div class="wcontent confirm"
				style="text-align: center; font-size: 14px;">
				<br> <span class='wx'>温馨提示：</span><span class='tipmsg'>确认退出当前系统？</span>
				<input type="hidden" id="upHostId"><input type="hidden"
					id="upStatus"> <br> <span id="confimMsg"></span>
			</div>
			<div class="wbtn">
				<input type="button" class="btn" value="确定" id="logoutBtn">
				<input type="button" class="btn" value="取消" id="close_x3">
			</div>
		</div>

	</div>
	<script src="${ctx }/static/plugins/layuiadmin/layui/layui.js"></script>
	<script>
  layui.config({
    base: '../static/plugins/layuiadmin/' //静态资源所在路径
  }).extend({
    index: 'lib/index' //主入口模块
  }).use('index');
  </script>
</body>
</html>
