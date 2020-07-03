package com.test.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.bean.PageCondition;
import com.test.bean.PageResult;
import com.test.bean.ResultView;
import com.test.bean.SignInfo;
import com.test.service.SignInfoService;

@RequestMapping("/signInfo")
@Controller
public class SignInfoController {
	
	@Autowired
	private SignInfoService signInfoService;
	
	
	@RequestMapping(value = "/search", method = RequestMethod.POST)
	@ResponseBody
	public PageResult search(@RequestBody PageCondition condition){
		PageResult result = new PageResult();
		condition.init();//初始化查询条件
		List<SignInfo> list = signInfoService.searchByCondition(condition);
		long count = signInfoService.getTotals(condition);
		result.setData(list);
		result.setTotal(count,condition.getSize());
		result.setCode(1);
		return result;
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	@ResponseBody
	public ResultView insert(@RequestBody SignInfo signInfo){
		ResultView result = new ResultView();
		signInfoService.insert(signInfo);
  		result.setCode(1);
		return result;
	}
	
	@RequestMapping(value = "/fetchSignInfo", method = RequestMethod.GET)
	@ResponseBody
	public ResultView fetchSignInfo(){
		ResultView result = new ResultView();
		
		SignInfo signInfo = signInfoService.fetchSignInfo();
		
		if(signInfo == null){
			result.setCode(0);
			result.setMsg("暂无课程打卡！");
			return result;
		}
		
		result.setData(signInfo);
		result.setCode(1);
		return result;
	}
	
}
