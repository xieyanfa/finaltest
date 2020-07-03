package com.test.bean;

import java.io.Serializable;

public class PageCondition implements Serializable{

	private static final long serialVersionUID = 1374399911004594172L;
	
	/** 分页大小*/
	private int size=10;

	/*** 页数 */
	private int pageNow = 1;

	/** �?始记�?*/
	private int start = 0;
	
	/** 关键�?*/
	private String keyWord="";	
	
	/**是否是分页查�? 1.�?*/
	private int isPage;
	
	/** 排序字段*/
	private String sortField;
	
	/** 排序方式*/
	private String sortOrder;
	
	private String startTime;
	
	private String endTime;
	
	private String time;
	
	public void init(){
	    this.isPage = 1;
		if(this.pageNow>=1){
			this.start = (this.pageNow-1)*size;
		}
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public int getPageNow() {
		return pageNow;
	}

	public void setPageNow(int pageNow) {
		this.pageNow = pageNow;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public String getKeyWord() {
		return keyWord;
	}

	public void setKeyWord(String keyWord) {
		this.keyWord = keyWord;
	}

	public int getIsPage() {
		return isPage;
	}

	public void setIsPage(int isPage) {
		this.isPage = isPage;
	}

	public String getSortField() {
		return sortField;
	}

	public void setSortField(String sortField) {
		this.sortField = sortField;
	}

	public String getSortOrder() {
		return sortOrder;
	}

	public void setSortOrder(String sortOrder) {
		this.sortOrder = sortOrder;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	
	

}
