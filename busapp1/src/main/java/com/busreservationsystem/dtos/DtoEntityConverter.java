package com.busreservationsystem.dtos;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartException;

import com.busreservationsystem.entities.Admin;
import com.busreservationsystem.entities.Bus;
import com.busreservationsystem.entities.Customer;


@Component
public class DtoEntityConverter {
	public CustomerDTO toCustomerDto(Customer entity) {
		CustomerDTO dto = new CustomerDTO();
		dto.setId(entity.getId());
		dto.setFirstname(entity.getFirstname());
		dto.setLastname(entity.getLastname());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		return dto;
	}

	public Customer toCustomerEntity(CustomerDTO dto) {
		Customer entity = new Customer();
		entity.setId(dto.getId());
		entity.setFirstname(dto.getFirstname());
		entity.setLastname(dto.getLastname());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		return entity;		
		
	}
	
	public AdminDTO toAdminDto(Admin entity) {
		AdminDTO dto = new AdminDTO();
		dto.setId(entity.getId());
		dto.setFirstname(entity.getFirstname());
		dto.setLastname(entity.getLastname());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		return dto;
	}
	
	
	
	
	
	public Admin toAdminEntity(AdminDTO dto) {
		Admin entity = new Admin();
		entity.setId(dto.getId());
		entity.setFirstname(dto.getFirstname());
		entity.setLastname(dto.getLastname());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		return entity;		
		
	}
	
	
	
	
	
	public BusDTO busEntityToDto(Bus bus) {
		if(bus == null)
			return null;
		BusDTO dto = new BusDTO();
		BeanUtils.copyProperties(bus, dto);
		return dto;
	}
	
	public Bus busFormDtoToEntity(BusFormDTO busDto) {
		Bus bus = new Bus();
		BeanUtils.copyProperties(busDto, bus, "thumbnail");
		if(busDto.getThumbnail() != null)
			bus.setThumbnail(busDto.getThumbnail().getOriginalFilename());
		return bus;
	}
	
	
	
	
	
	
	
	
	
	
}
	