import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(public playerService: PlayerService, public router: Router) { }

  ngOnInit() {
    this.playerService.listPlayersRanking();
  }

  edit(player: Player) {
    this.router.navigateByUrl(`/player/${player.name}`);
  }

}
