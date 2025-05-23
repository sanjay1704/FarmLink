package com.example.demo.controller;
// ContactUsController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.ContactUs;
import com.example.demo.service.ContactUsService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactUsController {
    @Autowired
    private ContactUsService contactUsService;

    @PostMapping
    public ResponseEntity<ContactUs> createContact(@RequestBody ContactUs contactUs) {
        ContactUs savedContact = contactUsService.saveContact(contactUs);
        return ResponseEntity.ok(savedContact);
    }
}
