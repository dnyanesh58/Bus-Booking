package com.busreservationsystem.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.busreservationsystem.dtos.Credentials;
import com.busreservationsystem.dtos.CustomerDTO;
import com.busreservationsystem.dtos.Response;
import com.busreservationsystem.entities.Customer;
import com.busreservationsystem.services.CustomerServiceImpl;


@CrossOrigin
@RestController
public class CustomerControllerImpl {
	@Autowired
	private CustomerServiceImpl customerService;
	@PostMapping("/customer/signin")
	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
		CustomerDTO customerDto = customerService.findCustomerByEmailAndPassword(cred);
		if(customerDto == null)
			return Response.error("customer not found");
		return Response.success(customerDto);
	}
	@PostMapping("/customer/signup")
	public ResponseEntity<?> signUp(@RequestBody Customer customer) {
		Map<String, Object> result = customerService.saveCustomer(customer);
		return Response.success(result);
	}
	
	

}
