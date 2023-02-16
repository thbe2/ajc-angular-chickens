import { Component } from '@angular/core';
import { Chicken } from '../chickens';
import { ChickenService } from '../chicken.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-chickens',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.css']
})

export class ChickensComponent {
  // chicken: Chicken = {
  //   id: 1,
  //   name: 'chicken1',
  //   colour: 'brown',
  //   picture: 'assets/img/chicken1.png',
  // }

  // Attributs
  chickens: Chicken[] = [];

  // Constructeur
  constructor(private chickenService: ChickenService) { }

  // Méthodes

   getChickens(): void {
    this.chickenService.getChickens().subscribe((chickensFromObservable) => (this.chickens = chickensFromObservable));
  }

  ngOnInit(): void {
    this.getChickens();
  }

}
