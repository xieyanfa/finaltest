package com.test.bean;

import java.util.Date;

public class SignInfo {
	
	private long id;
	
	private String name;
	
	private Date startTime;//ǩ����ʼʱ��
	
	private Date endTime;//ǩ������ʱ��
	
	private Date createTime;//����ʱ��


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public Date getStartTime() {
		return startTime;
	}


	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}


	public Date getEndTime() {
		return endTime;
	}


	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Date getCreateTime() {
		return createTime;
	}


	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}


	

}
