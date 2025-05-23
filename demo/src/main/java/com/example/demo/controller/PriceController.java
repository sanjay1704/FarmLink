package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.PriceEntry;
import com.example.demo.service.PriceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vegetable-prices")
@CrossOrigin(origins = "http://localhost:3000")
public class PriceController {

    @Autowired
    private PriceService priceService;

    // Endpoint to get all price entries
    @GetMapping
    public List<PriceEntry> getAllPriceEntries() {
        return priceService.getAllPriceEntries();
    }

    // Endpoint to save a new price entry
    @PostMapping
    public ResponseEntity<PriceEntry> savePriceEntry(@RequestBody PriceEntry priceEntry) {
        PriceEntry savedEntry = priceService.savePriceEntry(priceEntry);
        return ResponseEntity.ok(savedEntry);
    }

    // Endpoint to get price entries by date
    @GetMapping("/date/{date}")
    public ResponseEntity<PriceEntry> getPriceEntriesByDate(@PathVariable String date) {
        Optional<PriceEntry> priceEntry = priceService.getPriceEntryByDate(date);
        return priceEntry.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
