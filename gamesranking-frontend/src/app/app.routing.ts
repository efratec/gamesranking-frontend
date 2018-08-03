import { Routes } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';
import { RankingComponent } from './ranking/ranking.component';

export const AppRouting: Routes = [
    {
        path: 'ranking', component: RankingComponent
    },
    {
        path: 'player', component: PlayerFormComponent
    },
    {
        path: 'player/:name', component: PlayerFormComponent
    },
    {
        path: '**', component: RankingComponent
    }
];
