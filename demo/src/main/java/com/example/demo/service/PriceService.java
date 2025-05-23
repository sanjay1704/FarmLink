package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.PriceEntry;
import com.example.demo.repository.PriceRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PriceService {

    @Autowired
    private PriceRepository priceRepository;

    // Save price entry
    public PriceEntry savePriceEntry(PriceEntry priceEntry) {
        return priceRepository.save(priceEntry);
    }

    // Get all price entries
    public List<PriceEntry> getAllPriceEntries() {
        return priceRepository.findAll();
    }

    // Get price entry by date
    public Optional<PriceEntry> getPriceEntryByDate(String date) {
        return priceRepository.findByDate(date); // assuming you define this in your repository
    }
}
