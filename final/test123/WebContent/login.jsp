<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<title>用户登录</title>
<head>
<%@ include file="./view/commom/commonTag.jsp"%><!-- 引入公共文件 -->
<link  href="${ctx }/static/css/login.css" rel="stylesheet"><!-- 引入样式表 -->
<script src="${ctx }/static/js/login.js"></script><!-- 引入js文件 -->
</head>
<body>
	<div id="login_background">
			<div id="login">
		<span class="title">签到管理系统</span>
		<form class="layui-form">
			<div class="login_input">
				<span class="fa fa-user" aria-hidden="true"></span> 
				<input type="text" id="userName" name="userName" placeholder="账号"  lay-verify="required">
			</div>
			<p></p>
			<div class="login_input">
				<span class="fa fa-lock" aria-hidden="true"></span> 
				<input type="password" id="passWord" name="passWord"  placeholder="密码"  lay-verify="required">
			</div>
			<!--  <p></p>  -->
			<p style="height: 30px;"></p>
			<div class="login_button">
				<input type="button" lay-filter="login" lay-submit=""  id="loginBtn" value="登录">
			</div>
		</form>
	</div>
</div>

</body>
</html>
