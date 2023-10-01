package com.codeclan.example.teas_and_biscuits_server.controllers;

import com.codeclan.example.teas_and_biscuits_server.models.Tea;
import com.codeclan.example.teas_and_biscuits_server.repositories.TeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TeasController {
    @Autowired
    TeaRepository teaRepository;
    @GetMapping(value = "/api/teas")
    public List<Tea> getAllTeas(){
        return teaRepository.findAll();
    }
    @GetMapping(value = "/api/teas/{id}")
    public Optional<Tea> getTea(@PathVariable Long id){
        return teaRepository.findById(id);
    }
    @PostMapping(value = "/api/teas")
    public Tea createTea(@RequestBody Tea tea){
        return teaRepository.save(tea);
    }
    @DeleteMapping(value = "/api/tea/{id}")
    public void deleteTea(@PathVariable Long id){
        teaRepository.deleteById(id);
    }
    @PutMapping(value = "/api/teas/{id}")
    public Tea updateTea(@RequestBody Tea newTea, @PathVariable Long id){
        return teaRepository.findById(id).map(tea -> {
            tea.setBrand(newTea.getBrand());
            tea.setName(newTea.getName());
            return teaRepository.save(tea);
        }).orElseGet(() -> teaRepository.save(newTea));
    }
}
