package com.busreservationsystem.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.busreservationsystem.entities.Admin;
import com.busreservationsystem.entities.Customer;


public interface adminDao extends JpaRepository<Admin, Integer>{
	Admin findById(int id);
	Admin findByEmail(String email);
//	List<Customer> findAll(Customer customer);
	

}
