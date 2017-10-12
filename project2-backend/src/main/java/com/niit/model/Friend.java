package com.niit.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="friend_batch4")
public class Friend {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String fromId;
	private String toId;
	private char status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getToId() {
		return toId;
	}
	public void setToId(String toId) {
		this.toId = toId;
	}
	public char getStatus() {
		return status;
	}
	public void setStatus(char status) {
		this.status = status;
	}
	public void setFromId(String fromId) {
		this.fromId = fromId;
	}
	public String getFromId() {
		return fromId;
	}
	
	

}
