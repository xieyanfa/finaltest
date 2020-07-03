layui.use([ 'form', 'laypage', 'layer', 'table', 'laydate' ], function() {

	var form = layui.form, layer = layui.layer, table = layui.table // 表格
	, laypage = layui.laypage, laydate = layui.laydate;

	var h = document.body.clientHeight && document.documentElement.clientHeight - 100;// 窗口高度
	// 执行一个 table 实例
	table.render({
		elem : '#demo',
		height : h,
		url : BASE_PATH + "user/search.do",// 数据接口
		method : 'post',
		async : false,
		contentType : 'application/json',
		title : '用户管理',
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
		cols : [ [ // 表头
		{
			field : 'userId',
			title : '编号',
			align : 'center',
			minWidth : 100
		},{
			field : 'rname',
			title : '姓名',
			align : 'center',
			minWidth : 180
		},{
			field : 'name',
			title : '账号',
			align : 'center',
			minWidth : 180
		}, 
		{
			field : 'pwd',
			title : '密码',
			align : 'center',
			minWidth : 100
		},
		{
			field : 'utype',
			title : '类型',
			align : 'center',
			minWidth : 120,
			templet: function(d){
					if(d.utype == '1'){
						return "管理员";
					}else if(d.utype == '2'){
						return "普通用户";
					}
			      }
		},{
			fixed : 'right',
			title : '操作',
			align : 'center',
			toolbar : '#barDemo',
			minWidth : 200
		}  ] ],
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

	// 监听行工具事件
	table.on('tool(pageList)', function(obj) {
		var data = obj.data, layEvent = obj.event; // 获得 lay-event 对应的值
		if (layEvent == 'edit') {
			
			layer.open({
				type : 1 // 此处以iframe举例
				,
				title : '编辑用户',
				area : [ '480px', '350px' ]
				,shadeClose:false 
		        ,shade: 0.5
				,content : $("#addWind"),
				btn : [ '保存', '关闭' ]  ,
				yes : function(index, layero) {
					form.on('submit(editform)', function (fromData) {
						/*var params = fromData.field;
						params.name = params.uname;*/
						var params = {
								name:fromData.field.uname,
								rname:fromData.field.rname,
								pwd:fromData.field.pwd,
								utype:'2',
								userId:data.userId
						}
						/*params.userId = data.userId	*/
					$.ajax({
							url : BASE_PATH + "user/update.do",
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
					 form.val('editform', {
						 "uname":data.name,
						 "rname":data.rname,
						 "pwd":data.pwd,
						 "utype":data.utype
					 });
					 layero.addClass('layui-form');//添加form标识
			       	 layero.find('.layui-layer-btn0').attr('lay-filter', 'editform').attr('lay-submit', '');//将按钮弄成能提交的
			       	 form.render(); 
				}
			});
			
		
			
		} else if (layEvent == 'delete') {
			layer.confirm('确认删除该用户数据？', function(index) {
				$.ajax({
					url : BASE_PATH + "user/delete.do?userId=" + data.userId ,
					type : "get",
					dataType : "json",
					async : false,
					contentType : "application/json",
					success : function(data) {
						if (data && data.code == 1) {
							search();
							layer.msg("操作成功！");
						} else {
							layer.msg("操作失败！");
						}
					}
				});
			});
		}
	});

	$("#searchButton").click(function() {
		search();
	});
	
	$("#addButton").click(function() {
		layer.open({
			type : 1 // 此处以iframe举例
			,
			title : '编辑用户',
			area : [ '480px', '350px' ]
			,shadeClose:false 
	        ,shade: 0.5
			,content : $("#addWind"),
			btn : [ '保存', '关闭' ]  ,
			yes : function(index, layero) {
				form.on('submit(editform)', function (fromData) {
					var params = {
							name:fromData.field.uname,
							rname:fromData.field.rname,
							pwd:fromData.field.pwd,
							utype:'2'
					}/*fromData.field;
					params.name = params.uname;*/
					
					$.ajax({
						url : BASE_PATH + "user/insert.do",
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
				$('#name').val(" ");
				layui.form.render();
			},
			btn2 : function(index, layero) {
				layer.close(index);
				$('#name').val(" ");
				layui.form.render();
			},
			success : function(layero) {
				$('#name').val(" ");
				 layero.addClass('layui-form');//添加form标识
		       	 layero.find('.layui-layer-btn0').attr('lay-filter', 'editform').attr('lay-submit', '');//将按钮弄成能提交的
		       	 form.render(); 
			}
		});
	});


	function search() {
		var keyWord = $("#keyWord").val();
		table.reload('pageReload', {
			page : {
				curr : 1, // 重新从第 1 页开始
			/*curr : pageNow,
			size:size*/
			},
			where : {
				keyWord : keyWord
			}
		});
	}

});
