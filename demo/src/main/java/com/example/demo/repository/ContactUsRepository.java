package com.example.demo.repository;
// ContactUsRepository.java
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.ContactUs;

public interface ContactUsRepository extends MongoRepository<ContactUs, String> {
}
