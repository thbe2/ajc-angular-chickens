package fr.ajc.chickens.services;

import java.util.List;

import fr.ajc.chickens.models.Chicken;

public interface ChickenServiceInterface {

	public Chicken addChicken(Chicken chicken);
	
	public List<Chicken> all();
}
