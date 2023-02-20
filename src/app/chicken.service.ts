import { Injectable } from '@angular/core';
import { Chicken } from './chickens';
import { CHICKENS } from './mock-chickens';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ChickenService {
  private chickenURL = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessagesService,
    private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ChickenService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ChickenService: ${message}`);
  }

  /** GET chickens from the server */
  getChickens(): Observable<Chicken[]> {
    return this.http.get<Chicken[]>(this.chickenURL + '/all').pipe(tap(_ => this.log('fetched chickens')),
      catchError(this.handleError<Chicken[]>('getChickens', [])));
  }

  /** GET chicken by id. Will 404 if id not found */
  getChicken(id: number): Observable<Chicken> {
    const url = `${this.chickenURL}/${id}`;
    return this.http.get<Chicken>(url).pipe(
      tap((_) => this.log(`fetched chicken id=${id}`)),
      catchError(this.handleError<Chicken>(`getChicken id=${id}`))
    );
  }

  /** PUT: update the chicken on the server */
  updateChicken(chicken: Chicken): Observable<any> {
    return this.http.put(this.chickenURL, chicken, this.httpOptions).pipe(
      tap((_) => this.log(`updated chicken id=${chicken.id}`),
        catchError(this.handleError<any>('updatedChicken')))
    )
  }

  /** POST: add a new chicken to the server */
  addChicken(chicken: Chicken): Observable<Chicken> {
    return this.http.post<Chicken>(this.chickenURL + '/add', chicken, this.httpOptions).pipe(
      tap((newChicken: Chicken) => this.log(`added chicken w/ id=${newChicken.id}`)),
      catchError(this.handleError<Chicken>('addChicken'))
    );
  }

  /** DELETE: delete the chicken from the server */
  deleteChicken(id: number): Observable<Chicken> {
    const url = `${this.chickenURL}/${id}`;
    return this.http.delete<Chicken>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted chicken id=${id}`)),
      catchError(this.handleError<Chicken>('deleteChicken'))
    );
  }
}
