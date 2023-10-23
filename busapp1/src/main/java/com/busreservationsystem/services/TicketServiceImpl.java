package com.busreservationsystem.services;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.busreservationsystem.daos.TicketDao;
import com.busreservationsystem.entities.Customer;
import com.busreservationsystem.entities.Ticket;
@Service
public class TicketServiceImpl {
	@Autowired
	private TicketDao ticketdao;
	
	public Ticket saveTicket(Ticket ticket) {
		
		return ticketdao.save(ticket);
	}

	public Map<String, Object> deleteTicket(int tid) {
		if(ticketdao.existsById(tid)) {
			ticketdao.deleteById(tid);
			return Collections.singletonMap("affectedRows", 1);
		}
		return Collections.singletonMap("affectedRows", 0);
	}
	
	
}
