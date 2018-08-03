import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../node_modules/ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

  player: Player = new Player();

  constructor(public playerService: PlayerService, public router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.findPlayerByName(params['name'])
    });
  }

  findPlayerByName(name: string) {
    if (name)
      this.playerService.findPlayerByName(name).subscribe(player => this.player = player as Player);
  }

  onSubmit() {
    if (!this.player.id) {
      this.save();
    } else {
      this.update();
    }
  }

  save() {
    this.playerService.save(this.player).subscribe(res => {
      this.router.navigateByUrl("/ranking");
      console.log(res);
    }, err => {
      this.toastr.warning(err.error.error);
    })
  }

  update() {
    this.playerService.update(this.player).subscribe(res => {
      this.router.navigateByUrl("/ranking");
      console.log(res);
    }, err => {
      this.toastr.warning(err.error.error);
    })
  }

  delete() {
    this.playerService.delete(this.player).subscribe(res => this.router.navigateByUrl("/ranking"));
  }

}
