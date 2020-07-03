package com.test.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.bean.PageCondition;
import com.test.bean.SignInfo;
import com.test.dao.SignInfoDao;
import com.test.service.SignInfoService;

@Service
public class SignInfoServiceImpl implements SignInfoService {
	
	@Autowired SignInfoDao signInfoDao;

	@Override
	public List<SignInfo> searchByCondition(PageCondition condition) {
		return signInfoDao.searchByCondition(condition);
	}

	@Override
	public long getTotals(PageCondition condition) {
		return signInfoDao.getTotals(condition);
	}

	@Override
	public void insert(SignInfo signInfo) {
		signInfoDao.insert(signInfo);
	}

	@Override
	public SignInfo fetchSignInfo() {
		return signInfoDao.fetchSignInfo();
	}

}
