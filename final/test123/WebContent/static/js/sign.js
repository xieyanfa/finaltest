$(function(){
	var sid;
	function fetchSignInfo(){
		$.ajax({
			url : BASE_PATH + "signInfo/fetchSignInfo.do",
			type : "get",
			dataType : "json",
			async : false,
			contentType : "application/json",
			success : function(data) {
				var status = data.code;
				if (status == 1 || status == '1') {
					sid = data.data.id;
			        $("#name").html("课程名称："+ data.data.name);
			        $("#startTime").html("开始时间：" + timeToString(data.data.startTime));
			        $("#endTime").html("结束时间：" + timeToString(data.data.endTime));
				} else {
					$("#name").html(data.msg);
					$(".clockinText").hide();
				}
			}
		});
	}
	
	fetchSignInfo();
	
	$("#clockin").click(function(){
		
		var params ={
			signId:sid
		};
		
		$.ajax({
			url : BASE_PATH + "signlog/insert.do",
			type : "post",
			dataType : "json",
			async : false,
			contentType : "application/json",
			data : $.toJSON(params),
			success : function(data) {
				if (data && data.code == 1) {
					$("#clockinText").html("打卡成功");
					$(this).css({
					    "border": "6px solid #1e9210"
					})
				} else {
					$("#clockinText").html("已打卡");
					$("#clockinText").css({
					    "color":"red"
					})
				}
			}
		});
		
	});
	
	
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

})