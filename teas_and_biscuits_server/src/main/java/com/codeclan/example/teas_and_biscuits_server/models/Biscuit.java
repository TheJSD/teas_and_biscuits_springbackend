package com.codeclan.example.teas_and_biscuits_server.models;

import javax.persistence.*;

@Entity
@Table(name = "biscuits")
public class Biscuit {
    @Column(name = "name")
    private String name;
    @Column(name = "brand")
    private String brand;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Biscuit(String name, String brand) {
        this.name = name;
        this.brand = brand;
    }
    public Biscuit(){}
    public String getName() {
        return name;
    }
    public String getBrand() {
        return brand;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
}
