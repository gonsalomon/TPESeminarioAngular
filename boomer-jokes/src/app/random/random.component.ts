import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  randomJoke : Joke;
  @Input() receivedJoke: Joke;
  
  constructor() {
    this.randomJoke = {icon_url:'', value:''};
    this.receivedJoke = {icon_url: '', value: ''};
  }

  ngOnInit(): void {
    this.randomJoke = this.receivedJoke;
  }

  getRandomJoke(): Joke{
    return {icon_url: '', value: ''};
  }
}
