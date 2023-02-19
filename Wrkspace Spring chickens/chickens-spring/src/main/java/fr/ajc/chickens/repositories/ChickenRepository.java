package fr.ajc.chickens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.ajc.chickens.models.Chicken;

public interface ChickenRepository extends JpaRepository<Chicken, Long>{

}
