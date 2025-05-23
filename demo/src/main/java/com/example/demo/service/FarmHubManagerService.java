package com.example.demo.service;

import com.example.demo.model.FarmHubManager;
import com.example.demo.repository.FarmHubManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FarmHubManagerService {

    private final FarmHubManagerRepository repository;

    @Autowired
    public FarmHubManagerService(FarmHubManagerRepository repository) {
        this.repository = repository;
    }

    public FarmHubManager saveManager(FarmHubManager manager) {
        return repository.save(manager);
    }
}
