package com.test.comm;

import javax.servlet.http.HttpServletRequest;

import com.test.bean.User;

public class Constains {
	
	public static void saveSessionUSER(User user,HttpServletRequest request){
        if(user==null){
            return;
        }
        request.getSession().setAttribute("USER", user);
    }
	
	public static User fetchSessionUSER(HttpServletRequest request){
        if(request.getSession().getAttribute("USER")==null){
            return null;
        }else{
            User user=(User)request.getSession().getAttribute("USER");
            return user;
        }
    }
	

}
