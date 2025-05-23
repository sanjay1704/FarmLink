package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "vegetableprices")
public class PriceEntry {

    @Id
    private String id;
    private String date; // Date in "yyyy-MM-dd" format
    private List<Price> prices; // List of vegetable prices

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public List<Price> getPrices() {
        return prices;
    }

    public void setPrices(List<Price> prices) {
        this.prices = prices;
    }

    // Constructor
    public PriceEntry(String date, List<Price> prices) {
        this.date = date;
        this.prices = prices;
    }

    public PriceEntry() {
    }
}
