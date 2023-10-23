package com.busreservationsystem.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.busreservationsystem.dtos.BusDTO;
import com.busreservationsystem.dtos.BusFormDTO;
import com.busreservationsystem.dtos.BusResponse;
import com.busreservationsystem.dtos.DtoEntityConverter;
import com.busreservationsystem.dtos.Response;
import com.busreservationsystem.dtos.Search;
import com.busreservationsystem.entities.Bus;
import com.busreservationsystem.services.BusServiceImpl;
import com.busreservationsystem.services.StorageService;

@CrossOrigin
@RestController
public class BusControllerImpl {

	@Autowired
	private BusServiceImpl busservice;
	
	@PostMapping("/bus/search")
	public ResponseEntity<?> findBus(@RequestBody Search search) {
		List<Bus> bus=new ArrayList<>();
		System.out.println(search.toString());
		bus = busservice.findBusBySourceAndDestinationAndDate(search);
		if (bus == null)
			return Response.error("bus  not found");
		return Response.success(bus);

	}
	
	
	
	
}
