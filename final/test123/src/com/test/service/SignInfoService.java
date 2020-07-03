package com.test.service;

import java.util.List;

import com.test.bean.PageCondition;
import com.test.bean.SignInfo;

public interface SignInfoService {

	List<SignInfo> searchByCondition(PageCondition condition);

	long getTotals(PageCondition condition);

	void insert(SignInfo signInfo);

	SignInfo fetchSignInfo();

}
