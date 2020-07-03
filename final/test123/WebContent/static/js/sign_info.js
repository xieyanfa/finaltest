layui.use([ 'form', 'laypage', 'layer', 'table', 'laydate' ], function() {

	var form = layui.form, layer = layui.layer, table = layui.table // 表格
	, laypage = layui.laypage, laydate = layui.laydate;
	
	
	//日期时间选择器
	  laydate.render({
	    elem: '#startTime'
	    ,type: 'datetime',
	    format: 'yyyy-MM-dd HH:mm:ss'
	  });
	  
	  laydate.render({
		  elem: '#endTime'
		  ,type: 'datetime',
		  format: 'yyyy-MM-dd HH:mm:ss'
	  });
	
	

	var h = document.body.clientHeight && document.documentElement.clientHeight - 100;// 窗口高度
	// 执行一个 table 实例
	table.render({
		elem : '#demo',
		height : h,
		url : BASE_PATH + "signInfo/search.do",// 数据接口
		method : 'post',
		async : false,
		contentType : 'application/json',
		title : '物资分类',
		page : {// 开启分页
			layout : [ 'prev', 'page', 'next', 'limit', 'refresh', 'skip',
					'count' ],
			theme : '#1E9FFF'
		},
		defaultToolbar : [ 'filter', 'print' ],
		limit : 50,
		limits : [ 10, 30, 50, 80, 100, 500 ],
		request : {
			pageName : 'pageNow', // 页码的参数名称，默认：page
			limitName : 'size' // 每页数据量的参数名，默认：limit
		},
		cols : [ [ // 表头 new Date(endDate )
		{
			field : 'id',
			title : '编号',
			align : 'center',
			minWidth : 100
		},{
			field : 'name',
			title : '签到名称',
			align : 'center',
			minWidth : 180
		}, 
		{
			field : 'startTime',
			title : '开始时间',
			align : 'center',
			minWidth : 200,
			templet: function(d){
				
				return timeToString(d.startTime);
		      }
		},
		{
			field : 'endTime',
			title : '结束时间',
			align : 'center',
			minWidth : 200,
			templet: function(d){
				return timeToString(d.endTime);
		      }
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

	$("#addButton").click(function() {
		layer.open({
			type : 1 // 此处以iframe举例
			,
			title : '添加签到时间',
			area : [ '480px', '350px' ]
			,shadeClose:false 
	        ,shade: 0.5
			,content : $("#addWind"),
			btn : [ '保存', '关闭' ]  ,
			yes : function(index, layero) {
				form.on('submit(editform)', function (fromData) {
					var params = {
							name:fromData.field.sname,
							startTime:stringToDate(fromData.field.startTime),
							endTime:stringToDate(fromData.field.endTime)
					}
					
					$.ajax({
						url : BASE_PATH + "signInfo/insert.do",
						type : "post",
						dataType : "json",
						async : false,
						contentType : "application/json",
						data : $.toJSON(params),
						success : function(data) {
							if (data && data.code == 1) {
								layer.close(index);
								search();
								layer.msg("操作成功！");
							} else {
								layer.msg("操作失败！");
							}
						}
					});
	        	 });
			},
			end : function() {
				layui.form.render();
			},
			btn2 : function(index, layero) {
				layer.close(index);
				layui.form.render();
			},
			success : function(layero) {
				 layero.addClass('layui-form');//添加form标识
		       	 layero.find('.layui-layer-btn0').attr('lay-filter', 'editform').attr('lay-submit', '');//将按钮弄成能提交的
		       	 form.render(); 
			}
		});
	});


	function search() {
		table.reload('pageReload', {
			page : {
				curr : 1, // 重新从第 1 页开始
			/*curr : pageNow,
			size:size*/
			}
		});
	}
	
	//字符串转日期格式
	function stringToDate(str){

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
	
	
	//毫秒时间转字符串
	function timeToString(time){
		if(time){
		     var oDate = new Date(time*1),
		         oYear = oDate.getFullYear(),
		         oMonth = oDate.getMonth()+1,
		         oDay = oDate.getDate(),
		         oHour = oDate.getHours(),
		         oMin = oDate.getMinutes(),
		         oSen = oDate.getSeconds(),
		         oTime = oYear +'-'+ getBz(oMonth) +'-'+ getBz(oDay) +' '+ getBz(oHour) +':'+ getBz(oMin) +':'+getBz(oSen);//拼接时间
		     return oTime;
		  }else{
		      return "";
		}
	}
	//补0
	function getBz(num){
	    if(parseInt(num) < 10){
	        num = '0'+num;
	    }
	    return num;
	}
		

});
