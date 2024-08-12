import { Component, effect, inject, input, OnInit } from '@angular/core';
import { ChartType, GoogleChartsModule, Row } from 'angular-google-charts';
import { BasketItem } from '../../basket/basket-item/basket-item.model';
import { CostChart } from './charts/cost-chart.model';
import { AmountChart } from './charts/amount-chart.model';
import { Chart } from './charts/chart.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  basket = input.required<BasketItem[]>();
  chart = input.required<Chart>();

  constructor() {
    effect(() => {
      this.chart().resolveData(this.basket());
    });
  }

  // activeChart = this.costChart;

  // ngOnInit() {
  //   this.activeChart.resolveData(this.basket());
  // }
}
