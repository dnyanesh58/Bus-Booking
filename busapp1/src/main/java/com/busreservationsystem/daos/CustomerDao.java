package com.busreservationsystem.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.busreservationsystem.entities.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer> {
	Customer findById(int id);
	Customer findByEmail(String email);
	

}
