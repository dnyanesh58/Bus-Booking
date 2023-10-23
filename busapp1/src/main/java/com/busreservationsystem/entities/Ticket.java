package com.busreservationsystem.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="ticket")
public class Ticket {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int tid;
	private String name;
	private String gender;
	private int age;
	private String source;
	private String destination;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date date;
	private String time;
	private String seatno;
	
	private int busid;
	private int id;
	
	public Ticket() {
		
	}
	
	public Ticket(int tid, String name, String gender, int age, String source, String destination, Date date,
			String time, String seatno, int busid, int id) {
		super();
		this.tid = tid;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.source = source;
		this.destination = destination;
		this.date = date;
		this.time = time;
		this.seatno = seatno;
		this.busid = busid;
		this.id = id;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
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
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getSeatno() {
		return seatno;
	}
	public void setSeatno(String seatno) {
		this.seatno = seatno;
	}
	public int getBusid() {
		return busid;
	}
	public void setBusid(int busid) {
		this.busid = busid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Ticket [tid=" + tid + ", name=" + name + ", gender=" + gender + ", age=" + age + ", source=" + source
				+ ", destination=" + destination + ", date=" + date + ", time=" + time + ", seatno=" + seatno
				+ ", busid=" + busid + ", id=" + id + "]";
	}
	
	
	
//	@ManyToOne
//	@JoinColumn(name="busid")
//	private Bus bus;
//	
//	@ManyToOne
//	@JoinColumn(name="id")
//	private Customer customer;

}