package com.busreservationsystem.controllers;

import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.busreservationsystem.services.StorageService;


@CrossOrigin
@RestController
public class FileController {
	
	@Autowired
	private StorageService storageService;
	
	@RequestMapping(value="/images/{fileName}", produces = "image/*")
	public void downloadFile(@PathVariable("fileName") String fileName,
			HttpServletResponse resp) throws IOException {
		try(FileInputStream in = new FileInputStream("C:/file1/" + fileName)) {
			FileCopyUtils.copy(in, resp.getOutputStream());
		Resource resource = storageService.load(fileName);
		FileCopyUtils.copy(resource.getInputStream(), resp.getOutputStream());
	}

	}
	}
