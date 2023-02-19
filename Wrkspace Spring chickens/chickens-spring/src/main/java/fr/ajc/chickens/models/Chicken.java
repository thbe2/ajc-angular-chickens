package fr.ajc.chickens.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="chickens")
public class Chicken {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String colour;
	private String picture;
	
	public Chicken(String name, String colour, String picture) {
		this.name = name;
		this.colour = colour;
		this.picture = picture;
	}
	
	
}
