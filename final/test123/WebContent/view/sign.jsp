<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title></title>
<%@ include file="./commom/commonTag.jsp"%><!-- 引入公共文件 -->
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <script src="${ctx }/static/js/sign.js"></script><!-- 引入js文件 -->
<style type="text/css">
body,html{
	height: 98%;
	width: 100%;
	background-image: url("../static/images/back.jpg");
	background-repeat: no-repeat;
	background-position: 100%;
	background-size: cover;
	
}
.title{
    font-size: 40px;
    color: #382222;
}
</style>

</head>
<body>
<div style="width: 100%;height: 100%; margin: 0 auto;">
	<div style="height: 30%;position: relative; top: 60px;left: 20%;">
		<span id="name" class="title"></span>
		<br/>
		<span id="startTime" class="title"></span>
		<br/>
		<span id="endTime" class="title"></span>
	</div>
	<div class="clockinText" style="width: 150px;height: 150px;border-radius: 50%;border: 6px solid rgb(19, 25, 241);    text-align: center;    margin: 0 auto;text-align: center;;position: fixed;left: 35%;top: 40%;" id="clockin">
		<span style="line-height: 141px;font-size: 14px;line-height: 141px; font-size: 22px;font-weight: 600;" id="clockinText">打卡</span>
	</div>
</div>	
</body>
</html>