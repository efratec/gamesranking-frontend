import { Component, ViewChild } from '@angular/core';
import { PlayerService } from './services/player.service';
import { PlayerFormComponent } from './player-form/player-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'GamesRanking';

  constructor(public playerService: PlayerService) {
  }

}
