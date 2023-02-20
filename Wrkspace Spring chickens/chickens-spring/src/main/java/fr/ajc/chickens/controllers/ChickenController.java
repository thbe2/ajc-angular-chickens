package fr.ajc.chickens.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    
	@GetMapping("/all")
    public List<Chicken> getChickens() {
        return chickenServiceInterface.all();
    }
	
	@GetMapping("/{id}")
    public Chicken getChicken(@PathVariable Long id) {
        return chickenServiceInterface.getChickenById(id);
    }

	@PostMapping("/add")
    public Chicken addChicken(@RequestBody Chicken chicken) {
        return chickenServiceInterface.addChicken(chicken);
    }
	
	@PutMapping()
    public Chicken updateChicken(@RequestBody Chicken chicken) {
        return chickenServiceInterface.updateChicken(chicken);
    }
	
	@DeleteMapping("/{id}")
    public void deleteChicken(@PathVariable Long id) {
        chickenServiceInterface.deleteChicken(id);
    }
}
	
