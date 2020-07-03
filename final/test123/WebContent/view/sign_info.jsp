<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>物资分类</title>
<%@ include file="./commom/commonTag.jsp"%><!-- 引入公共文件 -->
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<script type="text/javascript"
	src="${ctx }/static/js/sign_info.js"></script>
</head>

<body>
	<div class="container-fluid"
		style="height: 100% !important; width: 100%;    margin-top: 60px;">
		<div class='goujin_search_box' style="height: 40px;padding-top: 10px;">
			<form class="layui-form">
				<!-- <div class="layui-input-inline">
					<input type="text" id="keyWord" autocomplete="off"
						placeholder="请输入关键词,例如分类名称" class="layui-input"
						style="width: 250px;" border-radius: 4px; maxlength="25">
				</div>
				
				<button class="layui-btn layui-icon layui-btn-normal" type="button"
					id="searchButton" style="width: 80px;">搜索</button> -->
				<button class="layui-btn layui-icon layui-btn" type="button"
					id="addButton" style="width: 80px; margin-left: 10px;">增加</button>
			</form>
		</div>
		<table class="layui-hide" id="demo" lay-filter="pageList"></table>
	</div>

<script type="text/html" id="barDemo">
  	<a style="color: #49BBF9;font-size: 10px;" lay-event="edit">编辑</a>
  	<a style="color: red;font-size: 10px;margin-left: 10px;" lay-event="delete">删除</a>
</script>


	<div class="popupBox" id="addWind" style="display: none;">
		<form class="layui-form" action="">
			<div class="layui-form-item" style="margin-top: 20px;">
				<label class="layui-form-label" style="width: 100px;">签到名称:</label>
				<div class="layui-input-block" style="width: 60%;">
					<input type="text" id="sname" name="sname" lay-verify="required"
						autocomplete="off" placeholder="请输入签到名称" class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label" style="width: 100px;">开始时间:</label> 
				 <div class="layui-input-block" style="width: 60%;">
		     		  <input type="text" class="layui-input" id="startTime" name="startTime" placeholder="yyyy-MM-dd HH:mm:ss" lay-verify="required">
		   		 </div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label" style="width: 100px;">结束时间:</label> 
				 <div class="layui-input-block" style="width: 60%;">
		     		 <input type="text" class="layui-input" id="endTime" name="endTime" placeholder="yyyy-MM-dd HH:mm:ss" lay-verify="required">
		   		 </div>
			</div>
		</form>
	</div>
</body>
</html>
