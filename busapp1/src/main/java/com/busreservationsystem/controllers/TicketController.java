package com.busreservationsystem.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.busreservationsystem.dtos.Response;
import com.busreservationsystem.entities.Ticket;
import com.busreservationsystem.services.TicketServiceImpl;

@CrossOrigin
@RestController
public class TicketController {
	@Autowired
	private TicketServiceImpl ticketservice;
	
	
	@PostMapping("/bookticket")
	public ResponseEntity<?> Bookticket(@RequestBody Ticket ticket){
		Ticket result = ticketservice.saveTicket(ticket);
		return Response.success(result);
		
		
	}
	
	@DeleteMapping("/ticket/delete/{tid}")
	public ResponseEntity<?> deleteTicket(@PathVariable("tid") int tid) {
		  Map<String, Object> result =ticketservice.deleteTicket(tid);
		return Response.success(result);
	}
	
	

}
