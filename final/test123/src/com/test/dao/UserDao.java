package com.test.dao;

import java.util.List;

import com.test.bean.PageCondition;
import com.test.bean.User;


public interface UserDao {
	
	public User findByName(String name);

	public List<User> searchByCondition(PageCondition condition);

	public long getTotals(PageCondition condition);

	public void insert(User user);

	public void update(User user);

	public void delete(long userId);

}
