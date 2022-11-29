import { Component } from '@angular/core';
import { Joke } from '../joke';
import { JokeDataService } from '../joke-data.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent{
  joke: Joke = {icon_url: '', value: ''};
  constructor(private jokeService: JokeDataService) {
    this.getRandomJoke();
  }

  getRandomJoke(): void{
    this.jokeService.randomJoke()
    .subscribe(joke => this.joke = joke);
  }
}
