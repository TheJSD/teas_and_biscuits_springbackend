package com.codeclan.example.teas_and_biscuits_server.models;

import javax.persistence.*;

@Entity
@Table(name="teas")
public class Tea {
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

    public Tea(String name, String brand) {
        this.name = name;
        this.brand = brand;
    }

    public Tea(){}

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
