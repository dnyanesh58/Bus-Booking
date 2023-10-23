package com.busreservationsystem.daos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.busreservationsystem.dtos.BusDTO;
import com.busreservationsystem.dtos.Search;
import com.busreservationsystem.entities.Bus;

public interface BusDao extends JpaRepository<Bus, Integer>{

	

	List<Bus> findBySourceAndDestinationAndDate(String source, String destination, Date date);

	

}
