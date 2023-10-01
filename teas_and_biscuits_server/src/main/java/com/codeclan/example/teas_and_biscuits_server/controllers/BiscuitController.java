package com.codeclan.example.teas_and_biscuits_server.controllers;

import com.codeclan.example.teas_and_biscuits_server.models.Biscuit;
import com.codeclan.example.teas_and_biscuits_server.repositories.BiscuitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BiscuitController {
    @Autowired
    BiscuitRepository biscuitRepository;
    @GetMapping(value = "/api/biscuits")
    public List<Biscuit> getAllBiscuits(){
        return biscuitRepository.findAll();
    }
    @GetMapping(value = "/api/biscuits/{id}")
    public Optional<Biscuit> getBiscuit(@PathVariable Long id){
        return biscuitRepository.findById(id);
    }
    @PostMapping(value = "/api/biscuits")
    public Biscuit createBiscuit(@RequestBody Biscuit biscuit){
        return biscuitRepository.save(biscuit);
    }
    @DeleteMapping(value = "/api/biscuits/{id}")
    public void deleteBiscuit(@PathVariable Long id){
        biscuitRepository.deleteById(id);
    }
    @PutMapping(value = "/api/biscuits/{id}")
    public Biscuit updateBiscuit(@RequestBody Biscuit newBiscuit, @PathVariable Long id){
        return biscuitRepository.findById(id).map(biscuit -> {
            biscuit.setBrand(newBiscuit.getBrand());
            biscuit.setName(newBiscuit.getName());
            return biscuitRepository.save(biscuit);
        }).orElseGet(() -> biscuitRepository.save(newBiscuit));
    }
}
