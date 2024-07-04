import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-interactive-chart',
  templateUrl: './interactive-chart.component.html',
  styleUrls: ['./interactive-chart.component.css'],
})
export class InteractiveChartComponent implements OnInit, OnDestroy {
  totalUsers: Chart | undefined;

  ngOnInit() {
    this.totalUsers = new Chart('totalUsers', this.createTotalUsersChart());
  }

  ngOnDestroy() {
    this.totalUsers?.destroy();
  }

  private createTotalUsersChart(): ChartConfiguration {
    return {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [
          {
            label: 'Total Users',
            data: [12, 19, 22, 23],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }

}
