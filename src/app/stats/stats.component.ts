import { Component, inject, input } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { BasketItem } from '../basket/basket-item/basket-item.model';
import { FiltersComponent } from './filters/filters.component';
import { Chart } from './chart/charts/chart.model';
import { CostChart } from './chart/charts/cost-chart.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [ChartComponent, FiltersComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  basket = input.required<BasketItem[]>();

  chart: Chart = inject(CostChart);

  onFilter(chart: Chart) {
    this.chart = chart;
  }
}
