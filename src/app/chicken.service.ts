import { Injectable } from '@angular/core';
import { Chicken } from './chickens';
import { CHICKENS } from './mock-chickens';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ChickenService {
  private chickenURL= 'http://localhost:8080/api';

  constructor(
    private messageService: MessagesService,
    private http: HttpClient) { }

  /** Log a ChickenService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ChickenService: ${message}`);
  }

  getChickens(): Observable<Chicken[]> {
    return this.http.get<Chicken[]>(this.chickenURL+'/all');
  }

  getChicken(id: number): Observable<Chicken> {
    const chicken = CHICKENS.find((chicken) => chicken.id == id)!;
    this.messageService.add('ChickenService: fetched chicken id=${id}');
    return of(chicken);
  }

}
