import { Component } from '@angular/core';
import { ChickenService } from '../chicken.service';
import { Chicken } from '../chickens';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  chickens: Chicken[] = [];

  constructor(private chickenService: ChickenService) { }

  getChickens(): void {
    this.chickenService
    .getChickens()
    .subscribe((chickens) => this.chickens = chickens.slice(0, 3));
  }

  ngOnInit() {
    this.getChickens();
  }
}
