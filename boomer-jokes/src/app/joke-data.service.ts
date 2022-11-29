import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeDataService {
  private joke_url: string = "api.chucknorris.io/jokes";
  
  constructor(private http: HttpClient) {
    console.log('Se inicia el servicio');
  }
  
  public randomJoke(): Observable<Joke>{
    return this.http.get<Joke>('https://'+this.joke_url+"/random");
  }

  public searchJoke( query: string ): Observable<Joke[]>{
    console.log('llamaron a searchJoke');
    const result = this.http.get<Joke[]>(('https://'+this.joke_url+`/search?query=${query}`));
    result.subscribe(joke=>{
      console.log(joke);
      console.log(typeof joke);
    });
    return result;
  }
}
