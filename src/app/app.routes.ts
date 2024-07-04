import { Routes } from '@angular/router';
import { InteractiveChartComponent } from './interactive-chart/interactive-chart.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { CustomVideoPlayerComponent } from './custom-video-player/custom-video-player.component';

export const routes: Routes = [
  { path: 'interactive-chart', component: InteractiveChartComponent },
  { path: 'live-chat', component: LiveChatComponent },
  { path: 'custom-video-player', component: CustomVideoPlayerComponent },
  { path: '', redirectTo: '/interactive-chart', pathMatch: 'full' },
];
