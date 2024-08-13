import { Component, inject } from '@angular/core';
import { ChartFilter } from './chart-filter.model';
import { CostChart } from '../chart/charts/cost-chart.model';
import { AmountChart } from '../chart/charts/amount-chart.model';
import { RadioOptionsComponent } from '../../shared/radio-options/radio-options.component';
import { RadioOption } from '../../shared/radio-options/radio-option/radio-option.model';
import { ChartsService } from '../chart/charts/charts.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [RadioOptionsComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  private readonly chartsService = inject(ChartsService);

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

  onFilter(option: RadioOption) {
    const chartFilter = option as ChartFilter;
    this.chartsService.setChart(chartFilter.chart);
  }
}
