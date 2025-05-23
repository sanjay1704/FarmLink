package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FarmHubManager;

@Repository
public interface FarmHubManagerRepository extends MongoRepository<FarmHubManager, String> {
}
