package com.test.control;

import java.util.Date;
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
import com.test.bean.SignLog;
import com.test.comm.Constains;
import com.test.service.SignLogService;
import com.test.vo.SignLogVo;

@RequestMapping("/signlog")
@Controller
public class SignLogController {
	
	@Autowired
	private SignLogService signLogService;
	
	
	@RequestMapping(value = "/search", method = RequestMethod.POST)
	@ResponseBody
	public PageResult search(@RequestBody PageCondition condition){
		PageResult result = new PageResult();
		condition.init();//��ʼ����ѯ����
		List<SignLogVo> list = signLogService.searchByCondition(condition);
		long count = signLogService.getTotals(condition);
		result.setData(list);
		result.setTotal(count,condition.getSize());
		result.setCode(1);
		return result;
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	@ResponseBody
	public ResultView insert(@RequestBody SignLog signLog,HttpServletRequest request){
		ResultView result = new ResultView();
		
		//��ѯ����ǩ����Ϣ�û��Ƿ�����
		SignLog sign = signLogService.fetchByUserIdAndsignId(Constains.fetchSessionUSER(request).getUserId(),signLog.getSignId());
		
		//�����Ϊ��ֱ�ӷ���
		if(sign != null){
			result.setCode(0);
			result.setMsg("���Ѿ�ǩ�����ˣ�");
			return result;
		}
		
		signLog.setTime(new Date());
		signLog.setUserId(Constains.fetchSessionUSER(request).getUserId());
		//�����ݿ���������
		signLogService.insert(signLog);
		
  		result.setCode(1);
		return result;
	}
	
}
