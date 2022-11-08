import { Component } from '@angular/core';
import { JokeDataService } from './joke-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boomer-jokes';

  constructor(){
    
  }

  showJoke(){
  }
}
