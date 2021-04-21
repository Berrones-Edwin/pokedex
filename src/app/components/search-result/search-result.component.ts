import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() searchPokemon: any;
  @Output() getTypes = new EventEmitter<Array<string>>();

  constructor() {}

  ngOnInit(): void {}

  getPrincipalType(types: any[]) {
    this.getTypes.emit(types);
  }
}
