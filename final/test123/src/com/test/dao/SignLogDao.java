package com.test.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.test.bean.PageCondition;
import com.test.bean.SignLog;
import com.test.vo.SignLogVo;

public interface SignLogDao {

	SignLog fetchByUserIdAndsignId(@Param("userId")long userId, @Param("signId")long signId);

	void insert(SignLog signLog);

	List<SignLogVo> searchByCondition(PageCondition condition);

	long getTotals(PageCondition condition);

}
