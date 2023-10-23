package com.busreservationsystem.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.busreservationsystem.daos.CustomerDao;
import com.busreservationsystem.dtos.Credentials;
import com.busreservationsystem.dtos.CustomerDTO;
import com.busreservationsystem.dtos.DtoEntityConverter;
import com.busreservationsystem.entities.Customer;

@Transactional
@Service
public class CustomerServiceImpl {
	@Autowired
	private CustomerDao custdao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private DtoEntityConverter converter;
	
	
	public CustomerDTO findCustomerById(int Id) {
		Customer customer = custdao.findById(Id);
		return converter.toCustomerDto(customer);
	}
	
	public CustomerDTO findCustomerByEmail(String email) {
		Customer customer = custdao.findByEmail(email);
		return converter.toCustomerDto(customer);
	}
	
	public CustomerDTO findCustomerByEmailAndPassword(Credentials cred) {
		Customer dbCustomer = custdao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbCustomer != null && passwordEncoder.matches(rawPassword, dbCustomer.getPassword())) {
			CustomerDTO result = converter.toCustomerDto(dbCustomer);
			result.setPassword("********");
			return result;
		}
		return null;
	}
	
	public Map<String, Object> saveCustomer(Customer customer) {
		String rawPassword = customer.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		customer.setPassword(encPassword);
		
		customer =custdao.save(customer);
		return Collections.singletonMap("insertedId", customer.getId());
	}
}
	


