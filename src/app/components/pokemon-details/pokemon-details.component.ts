import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetail } from 'src/app/core/services/interfaces/pokemon-details';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: any;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data:any) {
    this.pokemonDetails = data['pokemon'];

    console.log(data)

  }

  ngOnInit(): void {}
  getAbilities(): string {
    return this.pokemonDetails.abilities
      .map((x: any) => x.ability.name)
      .join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }
}
