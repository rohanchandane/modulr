import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string;
  @Output() searchEvent = new EventEmitter();

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}
