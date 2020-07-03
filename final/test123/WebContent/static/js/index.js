$(function(){
	$("#logoutBtn").click(function() {
		location.href = BASE_PATH + "login.jsp";
	});
});

function logout() {
	$("#confirmBox").lightbox_me({
		centered : true,
		closeClick : true,
		closeSelector : '#close_x3'
	});
}


