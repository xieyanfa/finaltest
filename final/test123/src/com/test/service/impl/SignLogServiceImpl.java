package com.test.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.bean.PageCondition;
import com.test.bean.SignLog;
import com.test.dao.SignLogDao;
import com.test.service.SignLogService;
import com.test.vo.SignLogVo;

@Service
public class SignLogServiceImpl implements SignLogService {
	
	@Autowired SignLogDao signLogDao;

	@Override
	public SignLog fetchByUserIdAndsignId(long userId, long signId) {
		return signLogDao.fetchByUserIdAndsignId(userId,signId);
	}

	@Override
	public void insert(SignLog signLog) {
		signLogDao.insert(signLog);
	}

	@Override
	public List<SignLogVo> searchByCondition(PageCondition condition) {
		return signLogDao.searchByCondition(condition);
	}

	@Override
	public long getTotals(PageCondition condition) {
		return signLogDao.getTotals(condition);
	}

}
