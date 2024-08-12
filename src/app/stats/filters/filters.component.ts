import { Component, inject, input, output } from '@angular/core';
import { ChartFilter } from './chart-filter.model';
import { CostChart } from '../chart/charts/cost-chart.model';
import { AmountChart } from '../chart/charts/amount-chart.model';
import { RadioOptionsComponent } from '../../shared/radio-options/radio-options.component';
import { Chart } from '../chart/charts/chart.model';
import { RadioOption } from '../../shared/radio-options/radio-option/radio-option.model';
import { BasketItem } from '../../basket/basket-item/basket-item.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [RadioOptionsComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  filters: ChartFilter[] = [
    {
      value: 'cost',
      text: 'За вартістю',
      chart: inject(CostChart),
    },
    {
      value: 'amount',
      text: 'За кількістю',
      chart: inject(AmountChart),
    },
  ];

  basket = input.required<BasketItem[]>;
  choose = output<Chart>();

  onFilter(option: RadioOption) {
    const chartFilter = option as ChartFilter;
    this.choose.emit(chartFilter.chart);
  }
}
