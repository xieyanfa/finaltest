package com.test.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.bean.PageCondition;
import com.test.bean.User;
import com.test.dao.UserDao;
import com.test.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public User findByName(String name) {
		return userDao.findByName(name);
	}

	@Override
	public List<User> searchByCondition(PageCondition condition) {
		return userDao.searchByCondition(condition);
	}

	@Override
	public long getTotals(PageCondition condition) {
		return userDao.getTotals(condition);
	}

	@Override
	public void insert(User user) {
		userDao.insert(user);
	}

	@Override
	public void update(User user) {
		userDao.update(user);
	}

	@Override
	public void delete(long userId) {
		userDao.delete(userId);
	}
	
}
