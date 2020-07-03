package com.test.bean;

import java.io.Serializable;


public class PageResult extends ResultView implements Serializable{
	private static final long serialVersionUID = -9198461526712948607L;
	/**记录�?*/
	private long total;
	
	/**总页�?**/
	private long totalPages;
	
	/**每页条数**/
	private int size=10;

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
		this.totalPages=this.total % this.size == 0 ? this.total
				/ this.size : this.total / this.size + 1;
	}
	
	public void setTotal(long total,int size) {
		this.total = total;
		this.size = size;
		this.totalPages=this.total % size == 0 ? this.total
				/size : this.total / size + 1;
	}
	public long getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(long totalPages) {
		this.totalPages = totalPages;
	}

}
