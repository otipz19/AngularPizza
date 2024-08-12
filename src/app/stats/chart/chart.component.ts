import { Component, inject, input, OnInit } from '@angular/core';
import { ChartType, GoogleChartsModule, Row } from 'angular-google-charts';
import { BasketItem } from '../../basket/basket-item/basket-item.model';
import { CostChart } from './charts/cost-chart.model';
import { AmountChart } from './charts/amount-chart.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit {
  basket = input.required<BasketItem[]>();

  private readonly costChart = inject(CostChart);
  private readonly amountChart = inject(AmountChart);
  activeChart = this.costChart;

  ngOnInit() {
    this.activeChart.resolveData(this.basket());
  }
}
