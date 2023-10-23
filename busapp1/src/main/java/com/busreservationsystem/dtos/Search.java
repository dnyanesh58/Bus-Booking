package com.busreservationsystem.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

public class Search {

	
	
	private String source;
	private String destination;
	@DateTimeFormat(pattern="yyyy-MM-dd")
 @Temporal(TemporalType.DATE) 
	private Date date;
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Search(String source, String destination, Date date) {
		super();
		this.source = source;
		this.destination = destination;
		this.date = date;
	}
	@Override
	public String toString() {
		return "Search [source=" + source + ", destination=" + destination + ", date=" + date + "]";
	}
	
}
