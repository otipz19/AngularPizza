import { Component } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [ChartComponent, FiltersComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {}
