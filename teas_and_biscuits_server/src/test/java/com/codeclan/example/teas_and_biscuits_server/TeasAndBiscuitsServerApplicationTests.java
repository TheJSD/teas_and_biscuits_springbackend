package com.codeclan.example.teas_and_biscuits_server;

import com.codeclan.example.teas_and_biscuits_server.models.Biscuit;
import com.codeclan.example.teas_and_biscuits_server.models.Tea;
import com.codeclan.example.teas_and_biscuits_server.repositories.BiscuitRepository;
import com.codeclan.example.teas_and_biscuits_server.repositories.TeaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TeasAndBiscuitsServerApplicationTests {

	@Autowired
	BiscuitRepository biscuitRepository;
	@Autowired
	TeaRepository teaRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createBiscuitandTea(){
		Biscuit biscuit = new Biscuit("Chocolate Digestive", "McVites");
		biscuitRepository.save(biscuit);
		Tea tea = new Tea("Earl Grey", "Twinings");
		teaRepository.save(tea);
	}

}
