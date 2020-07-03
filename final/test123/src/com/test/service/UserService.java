package com.test.service;

import java.util.List;

import com.test.bean.PageCondition;
import com.test.bean.User;


public interface UserService {

	public User findByName(String name);

	public List<User> searchByCondition(PageCondition condition);

	public long getTotals(PageCondition condition);

	public void insert(User user);

	public void update(User user);

	public void delete(long userId);
	
	
	
}
