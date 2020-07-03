<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/> 
<%
	String path = request.getContextPath();
	String serverName = request.getServerName();
	int serverPort = request.getServerPort();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	String baseServer = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/";
%>
<!-- jquery -->
<script src="${ctx }/static/js/jquery/jquery-2.1.4.min.js"></script>
<script src="${ctx }/static/js/jquery/jquery.json.min.js"></script>

<!-- bootstrap -->
 <script src="${ctx }/static/plugins/bootstrap/bootstrap.min.js"></script> 
<link href="${ctx }/static/plugins/bootstrap/bootstrap.min.css" rel="stylesheet">
<link href="${ctx }/static/plugins/bootstrap/style.css" rel="stylesheet">
<link href="${ctx }/static/plugins/bootstrap/animate.css" rel="stylesheet">
<link href="${ctx }/static/plugins/bootstrap/font-awesome2.css" rel="stylesheet">

<!-- layui -->
<script type="text/javascript" src="${ctx }/static/plugins/layui/layui.js"></script>
<link rel="stylesheet" href="${ctx }/static/plugins/layui/css/layui.css" media="all">


<script type="text/javascript">
var BASE_PATH =  '<%=basePath%>';
var SERVER_NAME =  '<%=serverName%>';
var SERVER_PORT = '<%=serverPort%>'; 
var PATH = '<%=path%>';
var BASE_SERVER = '<%=baseServer%>';
var rname = '${ sessionScope.USER.name}';
var adminUname =  '${ sessionScope.USER.rname}';
</script>