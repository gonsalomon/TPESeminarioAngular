import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeDataService } from '../joke-data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  jokes : Joke[] = [];

  constructor(private jokeService: JokeDataService) {
  }

  ngOnInit(): void {
  }

  searchJokes(query: string) : Joke[]{
    const jokes = this.jokeService.searchJoke(query);
    return [];
  }
}
