package com.codeclan.example.teas_and_biscuits_server.repositories;

import com.codeclan.example.teas_and_biscuits_server.models.Tea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeaRepository extends JpaRepository<Tea, Long> {
}
