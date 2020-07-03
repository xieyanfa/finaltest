package com.test.bean;

import java.util.Date;

/**
 * Ç©µ½¼ÇÂ¼±àºÅ
 * @author Administrator
 *
 */
public class SignLog {
	
	private long logId;//Ç©µ½¼ÇÂ¼±àºÅ
	
	private long userId;//ÓÃ»§±àºÅ
	
	private long signId;//Ç©µ½±àºÅ
	
	private Date time;//Ç©µ½Ê±¼ä

	public long getLogId() {
		return logId;
	}

	public void setLogId(long logId) {
		this.logId = logId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getSignId() {
		return signId;
	}

	public void setSignId(long signId) {
		this.signId = signId;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}
	

}
