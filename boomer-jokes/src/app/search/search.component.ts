import { Component } from '@angular/core';
import { Joke } from '../joke';
import { JokeDataService } from '../joke-data.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  jokes : Joke[] = [];

  constructor(private jokeService: JokeDataService) {
  }

  //traigo chistes que contengan query y los vuelco en jokes
  searchJokes(query: string) : void{
    console.log('Estoy buscando chistes que digan ' + query)
    this.jokeService.searchJoke(query).subscribe()
  }
}
