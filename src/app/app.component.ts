import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { Pokemon, PokemonList } from './core/services/interfaces/pokemon';
import { PokemonDetail } from './core/services/interfaces/pokemon-details';
import { PokemonService } from './core/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokeapi';
  pokemonsList: Array<PokemonDetail> = [];
  offset: number;
  loading: boolean = false;
  isLastPage = false;
  isSearching: boolean = false;
  search: FormControl = new FormControl('');
  searchPokemon: any;

  constructor(
    private pokemonService: PokemonService,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar
  ) {
    this.offset = 0;
  }
  ngOnInit(): void {
    this.getPage(this.offset);
    console.log(this.isLastPage);
  }
  getPage(offset: number) {
    this.loading = true;
    this.pokemonService.getPokemons(offset).subscribe((data: Pokemon) => {
      if (data) {
        const { results } = data;

        if (results.length === 0) this.isLastPage = true;

        if (!this.isLastPage) this.getPokemons(results);
      }
    });
  }

  prevPage(count: number) {
    this.offset = count;
    this.getPage(this.offset);
  }
  nextPage(count: number) {
    this.offset = count;
    this.getPage(this.offset);
  }

  getPrincipalType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }

  onSearchPokemonOutput(name: string) {
    
    const value = name;
    if (value === '') {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      this.loading = true;
      this.pokemonService.getPokemonDetail(value).subscribe(
        (pokemon: PokemonDetail) => {
          this.searchPokemon = pokemon;
          this.loading = false;
        },
        (error: any) => {
          this.loading = false;
          if (error.status === 404) {
            this.snackBar.open('Sorry, Pokemon not found', 'Ok', {
              duration: 5000,
            });
          }
        }
      );
    }
  }
  onDetail(pokemon: PokemonDetail): void {
    this.bottomSheet.open(PokemonDetailsComponent, {
      data: { pokemon },
    });
  }

  private getPokemons(list: Array<PokemonList>) {
    const arr: Observable<PokemonDetail>[] = [];

    list.map((val) => {
      arr.push(this.pokemonService.getPokemonDetail(val.name));
    });

    forkJoin([...arr]).subscribe((pokemons) => {
      this.pokemonsList = [...pokemons];
      this.offset += 20;
      this.loading = false;
    });
  }
}
