package com.test.dao;

import java.util.List;

import com.test.bean.PageCondition;
import com.test.bean.SignInfo;

public interface SignInfoDao {

	List<SignInfo> searchByCondition(PageCondition condition);

	long getTotals(PageCondition condition);

	void insert(SignInfo signInfo);

	SignInfo fetchSignInfo();

}
