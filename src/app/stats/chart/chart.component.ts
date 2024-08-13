import { Component, inject } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsService } from './charts/charts.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  private readonly chartsService = inject(ChartsService);
  chart = this.chartsService.activeChart;
}
