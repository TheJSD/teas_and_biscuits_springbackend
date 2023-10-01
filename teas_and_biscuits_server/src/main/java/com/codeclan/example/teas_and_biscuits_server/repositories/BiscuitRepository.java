package com.codeclan.example.teas_and_biscuits_server.repositories;

import com.codeclan.example.teas_and_biscuits_server.models.Biscuit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BiscuitRepository extends JpaRepository<Biscuit, Long> {

}
