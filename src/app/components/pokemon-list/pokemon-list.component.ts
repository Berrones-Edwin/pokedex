import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { PokemonDetail } from 'src/app/core/services/interfaces/pokemon-details';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  count: number = 0;
  @Input() pokemonsList: any;
  @Output() onDetailsPokemon = new EventEmitter<PokemonDetail>();
  @Output() onNextPage = new EventEmitter<number>();
  @Output() onPrevPage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.count = 0;
  }

  onDetail(pokemon: PokemonDetail) {
    this.onDetailsPokemon.emit(pokemon);
  }

  prevPage() {
    this.count = this.count === 0 ? 0 : (this.count += 20);

    this.onNextPage.emit(this.count);
  }
  nextPage() {
    this.count += 20;
    this.onPrevPage.emit(this.count);
  }
}
