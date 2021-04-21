import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = new FormControl();
  @Output() onSearchPokemon = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchPokemon() {

    setTimeout(() => {
      this.onSearchPokemon.emit(this.search.value);
    }, 1500);
  }
}
