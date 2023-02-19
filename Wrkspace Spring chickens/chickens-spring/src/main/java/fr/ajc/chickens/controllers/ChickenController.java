package fr.ajc.chickens.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.ajc.chickens.models.Chicken;
import fr.ajc.chickens.services.ChickenService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class ChickenController {

	private final ChickenService chickenServiceInterface;

    public ChickenController(ChickenService chickenServiceInterface) {
		this.chickenServiceInterface = chickenServiceInterface;
	}

	@PostMapping("/add")
    public Chicken addChicken(@RequestBody Chicken chicken) {
        return chickenServiceInterface.addChicken(chicken);
    }
}
	
