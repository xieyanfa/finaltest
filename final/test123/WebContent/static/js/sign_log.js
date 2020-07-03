layui.use([ 'form', 'laypage', 'layer', 'table', 'laydate' ], function() {

	var form = layui.form, layer = layui.layer, table = layui.table // 表格
	, laypage = layui.laypage, laydate = layui.laydate;
	
	
	//日期时间选择器
	  laydate.render({
	    elem: '#stime'
	    ,type: 'date',
	    format: 'yyyy-MM-dd'
	  });
	  
	  laydate.render({
		  elem: '#stimes'
		  ,type: 'date',
		  range: true,
		  format: 'yyyy-MM-dd'
	  });
	  

	var h = document.body.clientHeight && document.documentElement.clientHeight - 100;// 窗口高度
	// 执行一个 table 实例
	table.render({
		elem : '#demo',
		height : h,
		url : BASE_PATH + "signlog/search.do",// 数据接口
		method : 'post',
		async : false,
		contentType : 'application/json',
		title : '物资分类',
		page : {// 开启分页
			layout : [ 'prev', 'page', 'next', 'limit', 'refresh', 'skip',
					'count' ],
			theme : '#1E9FFF'
		},
		defaultToolbar : [ 'filter', 'exports' ],
		limit : 50,
		limits : [ 10, 30, 50, 80, 100, 500 ],
		request : {
			pageName : 'pageNow', // 页码的参数名称，默认：page
			limitName : 'size' // 每页数据量的参数名，默认：limit
		},
		cols : [ [ // 表头 new Date(endDate )
		{
			field : 'sname',
			title : '签到名称',
			align : 'center',
			minWidth : 100
		},{
			field : 'uname',
			title : '用户名称',
			align : 'center',
			minWidth : 180
		}, 
		{
			field : 'scount',
			title : '签到次数',
			align : 'center',
			sort: true,
			minWidth : 200
		
		}] ],
		response : {
			statusName : 'code' // 数据状态的字段名称，默认：code
			,
			statusCode : 1 // 成功的状态码，默认：0
			,
			msgName : 'msg' // 状态信息的字段名称，默认：msg
			,
			countName : 'total' // 数据总数的字段名称，默认：count
			,
			dataName : 'data' // 数据列表的字段名称，默认：data
		},
		done : function(res, page, count) {
		},
		id : 'pageReload'
	});
	 
	$("#searchButton").click(function() {
		search();
	});

	function search() {
		var time = $("#stime").val();
		var timestr = $("#stimes").val();
		var startTime ="",endTime = "";
		if(typeof timestr != "undefined" && timestr != null && timestr != ""){
			var stimes = $("#stimes").val().split(" - ");
			startTime = stimes[0];
			endTime = stimes[1];
		}
		
		var keyWord = $("#keyWord").val();
		table.reload('pageReload', {
			page : {
				curr : 1, // 重新从第 1 页开始
			},
			where : {
				time:time,
				startTime:startTime,
				endTime:endTime,
				keyWord : keyWord
			}
		});
	}
	
	//字符串转日期格式
	function stringToDateTime(str){

	    var tempStrs = str.split(" ");

	    var dateStrs = tempStrs[0].split("-");

	    var year = parseInt(dateStrs[0], 10);

	    var month = parseInt(dateStrs[1], 10) - 1;

	    var day = parseInt(dateStrs[2], 10);

	    var timeStrs = tempStrs[1].split(":");

	    var hour = parseInt(timeStrs [0], 10);

	    var minute = parseInt(timeStrs[1], 10);

	    var second = parseInt(timeStrs[2], 10);

	    var date = new Date(year, month, day, hour, minute, second);

	    return date;

	}

	//字符串转日期格式
	function stringToDate(str){

	    var tempStrs = str.split(" ");

	    var dateStrs = tempStrs[0].split("-");

	    var year = parseInt(dateStrs[0], 10);

	    var month = parseInt(dateStrs[1], 10) - 1;

	    var day = parseInt(dateStrs[2], 10);

	    var date = new Date(year, month, day);

	    return date;

	}
});
