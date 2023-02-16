import { Component, Input } from '@angular/core';
import { Chicken } from '../chickens';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-detail',
  templateUrl: './chicken-detail.component.html',
  styleUrls: ['./chicken-detail.component.css']
})
export class ChickenDetailComponent {
  chicken!: Chicken;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private chickenService: ChickenService) { }

  getChicken(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chickenService.getChicken(id).subscribe((chicken) => this.chicken = chicken);
  }

  ngOnInit() {
    this.getChicken();
  }

  goBack(): void {
    this.location.back();
  }
}
