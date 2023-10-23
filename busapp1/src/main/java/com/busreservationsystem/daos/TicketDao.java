package com.busreservationsystem.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.busreservationsystem.entities.Ticket;

public interface TicketDao extends JpaRepository<Ticket , Integer> {

}
