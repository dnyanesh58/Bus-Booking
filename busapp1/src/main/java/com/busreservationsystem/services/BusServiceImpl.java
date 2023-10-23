package com.busreservationsystem.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.busreservationsystem.daos.BusDao;
import com.busreservationsystem.dtos.BusDTO;
import com.busreservationsystem.dtos.BusFormDTO;
import com.busreservationsystem.dtos.Search;
import com.busreservationsystem.entities.Bus;
@Transactional
@Service
public class BusServiceImpl {
	@Autowired
	private  BusDao busdao;


	public List<Bus> findBusBySourceAndDestinationAndDate(Search search) {
		List<Bus> b=busdao.findBySourceAndDestinationAndDate(search.getSource(),search.getDestination(),search.getDate());
		return b;
		
	}
	

	
}
