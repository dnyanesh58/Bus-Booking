package com.busreservationsystem.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

public class BusFormDTO {
	
	    private int busid;
	    private String busno;
		private String source;
		private String destination;
		@DateTimeFormat(pattern="yyyy-MM-dd")
	 @Temporal(TemporalType.DATE) private Date date;
		private String time;
		private String amount;
		private MultipartFile thumbnail;
		public BusFormDTO(int busid,String busno, String source, String destination, Date date, String time,
				String amount, MultipartFile thumbnail) {
			super();
			this.busid = busid;
			this.busno = busno;
			this.source = source;
			this.destination = destination;
			this.date = date;
			this.time = time;
			this.amount = amount;
			this.thumbnail = thumbnail;
		}

		
		  public int getBusid() 
		  {
			  return busid; 
		  } 
		  
		  public void setBusid(int busid) 
		  {
			  this.busid = busid; 
		  }
		
		public String getBusno() {
			return busno;
		}
		public void setBusno(String busno) {
			this.busno = busno;
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
		public String getAmount() {
			return amount;
		}
		public void setAmount(String amount) {
			this.amount = amount;
		}
		public MultipartFile getThumbnail() {
			return thumbnail;
		}
		public void setThumbnail(MultipartFile thumbnail) {
			this.thumbnail = thumbnail;
		}
		@Override
		public String toString() {
			return "BusFormDTO [busid=" + ", busno=" + busno + ", source=" + source + ", destination="
					+ destination + ", date=" + date + ", time=" + time + ", amount=" + amount + ", thumbnail="
					+ thumbnail + "]";
		}
		
		
		

}
//		public BusFormDTO(String busno, String source, String destination, Date date, String time, String amount,
//				MultipartFile thumbnail) {
//			super();
//			this.busno = busno;
//			this.source = source;
//			this.destination = destination;
//			this.date = date;
//			this.time = time;
//			this.amount = amount;
//			this.thumbnail = thumbnail;
//		}
//		
//		public  BusFormDTO() {
//			
//		}
//		public String getBusno() {
//			return busno;
//		}
//		public void setBusno(String busno) {
//			this.busno = busno;
//		}
//		public String getSource() {
//			return source;
//		}
//		public void setSource(String source) {
//			this.source = source;
//		}
//		public String getDestination() {
//			return destination;
//		}
//		public void setDestination(String destination) {
//			this.destination = destination;
//		}
//		public Date getDate() {
//			return date;
//		}
//		public void setDate(Date date) {
//			this.date = date;
//		}
//		public String getTime() {
//			return time;
//		}
//		public void setTime(String time) {
//			this.time = time;
//		}
//		public String getAmount() {
//			return amount;
//		}
//		public void setAmount(String amount) {
//			this.amount = amount;
//		}
//		public MultipartFile getThumbnail() {
//			return thumbnail;
//		}
//		public void setThumbnail(MultipartFile thumbnail) {
//			this.thumbnail = thumbnail;
//		}
//		@Override
//		public String toString() {
//			return "BusFormDTO [busno=" + busno + ", source=" + source + ", destination=" + destination + ", date="
//					+ date + ", time=" + time + ", amount=" + amount + ", thumbnail=" + thumbnail + "]";
//		}
//
//}
