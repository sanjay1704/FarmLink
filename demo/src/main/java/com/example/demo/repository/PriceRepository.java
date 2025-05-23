package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.PriceEntry;

import java.util.Optional;

public interface PriceRepository extends MongoRepository<PriceEntry, String> {
    // Find price entry by date
    Optional<PriceEntry> findByDate(String date);
}
