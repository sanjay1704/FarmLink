package com.example.demo.model;

public class Price {

    private String name;  // Name of the vegetable (e.g., "Tomato")
    private double price;  // Price of the vegetable (e.g., 30.0)

    // Default constructor
    public Price() {
    }

    // Constructor to initialize Price
    public Price(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // Getters and Setters for each field
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
