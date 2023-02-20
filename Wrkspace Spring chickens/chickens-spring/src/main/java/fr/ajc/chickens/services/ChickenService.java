package fr.ajc.chickens.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.ajc.chickens.models.Chicken;
import fr.ajc.chickens.repositories.ChickenRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ChickenService implements ChickenServiceInterface {

	private final ChickenRepository chickenRepository;

	public ChickenService(ChickenRepository chickenRepository) {
		this.chickenRepository = chickenRepository;
	}

	public Chicken addChicken(Chicken chicken) {
		return chickenRepository.save(chicken);
	}

	public List<Chicken> all() {
		return chickenRepository.findAll();
	}

	public Chicken getChickenById(Long id) {
		return chickenRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("No entity found for id " + id));
	}

	public Chicken updateChicken(Chicken chicken) {
		return chickenRepository.save(chicken);
	}

	public void deleteChicken(Long id) {
		chickenRepository.deleteById(id);
	}

}
