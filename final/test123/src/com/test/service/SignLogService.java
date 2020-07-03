package com.test.service;

import java.util.List;

import com.test.bean.PageCondition;
import com.test.bean.SignLog;
import com.test.vo.SignLogVo;

public interface SignLogService {

	SignLog fetchByUserIdAndsignId(long userId, long signId);

	void insert(SignLog signLog);

	List<SignLogVo> searchByCondition(PageCondition condition);

	long getTotals(PageCondition condition);

}
