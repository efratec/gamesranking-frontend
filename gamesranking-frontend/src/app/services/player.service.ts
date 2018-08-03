import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl = 'http://localhost:8080/players';
  players: Player[] = [];

  constructor(public http: HttpClient) { }

  findPlayerByName(name: string) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  listPlayersRanking() {
    this.http.get(`${this.baseUrl}`).subscribe(res => {
      this.players = res as Player[];
      console.log(this.players);
    })
  }

  save(player: Player) {
    return this.http.post(`${this.baseUrl}/save`, player);
  }

  update(player: Player) {
    return this.http.post(`${this.baseUrl}/update`, player);
  }

  delete(player: Player) {
    return this.http.delete(`${this.baseUrl}/${player.id}`);
  }

}
