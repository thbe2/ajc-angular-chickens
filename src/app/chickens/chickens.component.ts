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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.chickenService.addChicken({ name } as Chicken)
      .subscribe(chicken => {
        this.chickens.push(chicken);
      });
  }

  delete(chicken: Chicken): void {
    this.chickens = this.chickens.filter(h => h !== chicken);
    this.chickenService.deleteChicken(chicken.id).subscribe();
  }
}
