import { Routes } from '@angular/router';
import { InteractiveChartComponent } from './interactive-chart/interactive-chart.component';
import { LiveChatComponent } from './live-chat/live-chat.component';

export const routes: Routes = [
    { path: 'interactive-chart', component: InteractiveChartComponent },
    { path: 'live-chat', component: LiveChatComponent },
];
