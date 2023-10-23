package com.busreservationsystem.dtos;

import org.springframework.http.ResponseEntity;

import com.busreservationsystem.dtos.BusResponse.Status;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
public class BusResponse {
	public static enum Status {
		success, fail, error
	}
	
	private Status status;
	private Object data;
	private String message;
	
	public BusResponse(Status status, Object data) {
		this.status = status;
		this.data = data;
	}

	public BusResponse(Status status, String message) {
		this.status = status;
		this.message = message;
	}

	public BusResponse(Status status, Object data, String message) {
		this.status = status;
		this.data = data;
		this.message = message;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "GaanaResponse [status=" + status + ", data=" + data + ", message=" + message + "]";
	}
	
	public static ResponseEntity<BusResponse> success() {
		return ResponseEntity.ok(new BusResponse(Status.success, null));
	}
	
	public static ResponseEntity<BusResponse> success(Object data) {
		return ResponseEntity.ok(new BusResponse(Status.success, data));
	}
	
	public static ResponseEntity<BusResponse> success(String message, Object data) {
		return ResponseEntity.ok(new BusResponse(Status.success, data, message));
	}
	
	public static ResponseEntity<BusResponse> fail(Object data) {
		return ResponseEntity.ok(new BusResponse(Status.fail, data));
	}

	public static ResponseEntity<BusResponse> fail(String message, Object data) {
		return ResponseEntity.ok(new BusResponse(Status.fail, data, message));
	}
	
	public static ResponseEntity<BusResponse> error(String message) {
		return ResponseEntity.ok(new BusResponse(Status.error, message));
	}

	public static ResponseEntity<BusResponse> error(String message, Object data) {
		return ResponseEntity.ok(new BusResponse(Status.error, data, message));
	}

}
