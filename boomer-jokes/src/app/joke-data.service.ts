import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeDataService {
  joke_url: string = "api.chucknorris.io";
  
  constructor(private http: HttpClient) { }
  
  public randomJoke(): Observable<Joke>{
    return this.http.get<Joke>(this.joke_url+"/random");
  }

  public searchJoke( query: string ): Observable<Joke[]>{
    return this.http.get<Joke[]>(this.joke_url+`jokes/search?query=${query}`)
  }
}
