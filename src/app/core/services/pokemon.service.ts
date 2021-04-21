import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './interfaces/pokemon';
import { PokemonDetail } from './interfaces/pokemon-details';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private _http: HttpClient) {}

  getPokemons(offset: number, limit = 20): Observable<Pokemon> {
    return this._http.get<Pokemon>(
      `${this.baseURL}?offset=${offset}&limit=${limit}`
    );
  }

  getPokemonDetail(name: string): Observable<PokemonDetail> {
    return this._http.get<PokemonDetail>(`${this.baseURL}/${name}`);
  }
}
