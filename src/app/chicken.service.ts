import { Injectable } from '@angular/core';
import { Chicken } from './chickens';
import { CHICKENS } from './mock-chickens';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})

export class ChickenService {

  constructor(private messageService: MessagesService) { }

  getChickens(): Observable<Chicken[]> {
    const chickens = CHICKENS;
    this.messageService.add('MessageService: fetched chickens');
    return of(chickens);
  }

  getChicken(id: number): Observable<Chicken> {
    const chicken = CHICKENS.find((chicken) => chicken.id == id)!;
    this.messageService.add('ChickenService: fetched chicken id=${id}');
    return of(chicken);
  }

}
