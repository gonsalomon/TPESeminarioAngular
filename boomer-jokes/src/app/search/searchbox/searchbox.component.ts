import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  @Output() submitQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendQuery(query: string): void{
    this.submitQuery.emit(query);
  }
}
