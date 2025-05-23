package com.example.demo.service;

// ContactUsService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ContactUs;
import com.example.demo.repository.ContactUsRepository;

@Service
public class ContactUsService {
    @Autowired
    private ContactUsRepository contactUsRepository;

    public ContactUs saveContact(ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }
}
