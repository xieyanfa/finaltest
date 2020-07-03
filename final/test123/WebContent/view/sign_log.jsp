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
	src="${ctx }/static/js/sign_log.js?version=${version}"></script>
</head>
<body>
	<div class="container-fluid"
		style="height: 100% !important; width: 100%;margin-top: 60px;">
		<div class='goujin_search_box' style="height: 40px;padding-top: 10px;">
			<form class="layui-form">
				<div class="layui-input-inline">
					<input type="text" id="keyWord" autocomplete="off"
						placeholder="请输入关键词,例如分类名称" class="layui-input"
						style="width: 250px;" border-radius: 4px; maxlength="25">
				</div>
				<div class="layui-inline">
			      <div class="layui-input-inline">
			        <input type="text" class="layui-input" id="stime" placeholder="请选择要查询日期">
			      </div>
			    </div>
			    <div class="layui-inline">
			      <div class="layui-input-inline">
			        <input type="text" class="layui-input" id="stimes" placeholder="请选择要查询日期范围">
			      </div>
			    </div>
				<button class="layui-btn layui-icon layui-btn-normal" type="button"
					id="searchButton" style="width: 80px;">搜索</button>
			</form>
		</div>
		<table class="layui-hide" id="demo" lay-filter="pageList"></table>
	</div>
</body>
</html>
