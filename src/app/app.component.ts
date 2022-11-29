import { Component } from '@angular/core';
import { Joke } from './joke';
import { JokeDataService } from './joke-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chuck Norris jokes!';

  constructor(){
  }
}
