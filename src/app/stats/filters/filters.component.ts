import { Component, inject } from '@angular/core';
import { ChartFilter } from './chart-filter.model';
import { RadioOptionsComponent } from '../../shared/radio-options/radio-options.component';
import { RadioOption } from '../../shared/radio-options/radio-option/radio-option.model';
import { ChartsService } from '../chart/charts/charts.service';
import { AppChartType } from '../chart/charts/chart-type.model';

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
      chartType: AppChartType.CostChart,
    },
    {
      value: 'amount',
      text: 'За кількістю',
      chartType: AppChartType.AmountChart,
    },
  ];

  onFilter(option: RadioOption) {
    const chartFilter = option as ChartFilter;
    this.chartsService.setChart(chartFilter.chartType);
  }
}
