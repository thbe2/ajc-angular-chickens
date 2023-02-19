package fr.ajc.chickens.services;

import org.springframework.stereotype.Service;

import fr.ajc.chickens.models.Chicken;
import fr.ajc.chickens.repositories.ChickenRepository;

@Service
public class ChickenService implements ChickenServiceInterface {

	private final ChickenRepository chickenRepository;

	public ChickenService(ChickenRepository chickenRepository) {
		this.chickenRepository = chickenRepository;
	}

	public Chicken addChicken(Chicken chicken) {
		return chickenRepository.save(chicken);
	}
	
	
}
