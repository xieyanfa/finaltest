package com.test.bean;

import java.util.Date;

/**
 * ǩ����¼���
 * @author Administrator
 *
 */
public class SignLog {
	
	private long logId;//ǩ����¼���
	
	private long userId;//�û����
	
	private long signId;//ǩ�����
	
	private Date time;//ǩ��ʱ��

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
