package com.test.control;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.bean.PageCondition;
import com.test.bean.PageResult;
import com.test.bean.ResultView;
import com.test.bean.User;
import com.test.comm.Constains;
import com.test.service.UserService;

@RequestMapping("/user")
@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/loginSubmit", method = RequestMethod.POST)
	@ResponseBody
	public ResultView login(@RequestBody User userParma,HttpServletRequest request){
		ResultView result = new ResultView();
		User user = userService.findByName(userParma.getName());
		
		if(user == null){
			result.setCode(0);
			result.setMsg("该用户不存在");
			return result;
		}
		if(!user.getPwd().equals(userParma.getPwd())){
			result.setCode(0);
			result.setMsg("密码不正确");
			return result;
		}
		Constains.saveSessionUSER(user, request);
		
		result.setCode(1);
		result.setData(user.getUtype());//返回数据  utype_userId
		return result;
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.POST)
	@ResponseBody
	public PageResult search(@RequestBody PageCondition condition){
		PageResult result = new PageResult();
		condition.init();
		List<User> list = userService.searchByCondition(condition);
		long count = userService.getTotals(condition);
		result.setData(list);
		result.setTotal(count,condition.getSize());
		result.setCode(1);
		return result;
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	@ResponseBody
	public ResultView insert(@RequestBody User user){
		ResultView result = new ResultView();
		userService.insert(user);
  		result.setCode(1);
		return result;
	}
	
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	@ResponseBody
	public ResultView update(@RequestBody User user){
		ResultView result = new ResultView();
		userService.update(user);
  		result.setCode(1);
		return result;
	}
	
	
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	@ResponseBody 
	public ResultView delete(long userId,HttpServletRequest
	request){ ResultView result = new ResultView();
	
	userService.delete(userId);
	
	result.setCode(1); 
	return result; 
	}
	
}
