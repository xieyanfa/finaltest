package com.test.bean;

import java.io.Serializable;

/**
 * �û�
 * @author Administrator
 *
 */
public class User implements Serializable{
	
	private static final long serialVersionUID = -580277087619688183L;

	private long userId;
	
	private String name;//��¼����
	
	private String rname;//��ʵ����
	
	private String pwd;
	
	private String utype; //�û�����   1����Ա  2��ͨ�û�

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getUtype() {
		return utype;
	}

	public void setUtype(String utype) {
		this.utype = utype;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}


	
}
