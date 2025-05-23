package com.example.demo.controller;

import com.example.demo.model.FarmHubManager;
import com.example.demo.service.FarmHubManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/managers")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your React app's URL if different
public class FarmHubManagerController {

    private final FarmHubManagerService service;

    @Autowired
    public FarmHubManagerController(FarmHubManagerService service) {
        this.service = service;
    }

    @PostMapping("/submit")
    public ResponseEntity<FarmHubManager> submitForm(@RequestBody FarmHubManager manager) {
        FarmHubManager savedManager = service.saveManager(manager);
        return new ResponseEntity<>(savedManager, HttpStatus.CREATED);
    }
}
