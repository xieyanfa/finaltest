layui.use(['form', 'layedit', 'laydate','layer'], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;

 //监听提交
  form.on('submit(login)', function(data){
	
	  var params = {
			name:data.field.userName,
	  		pwd:data.field.passWord
	  };
	  
	  $.ajax({
			url : BASE_PATH + "user/loginSubmit.do",
			type : "post",
			dataType : "json",
			async : false,
			contentType : "application/json",
			data : $.toJSON(params),
			success : function(data) {
				var status = data.code;
				if (status == 1 || status == '1') {
					var utype = data.data;
					if(utype == '1'){ //管理员
						location.href = BASE_PATH + "view/index.jsp"; //跳转到管理页面
					}else if(utype == '2'){ //普通用户
						location.href = BASE_PATH + "view/sign.jsp"; //跳转到签到页面
					}
			        
				} else {
					layer.msg(data.msg);
				}
			}
		});
  });

});