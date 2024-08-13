import { inject, Injectable, signal } from "@angular/core";
import { Chart } from "./chart.model";
import { CostChart } from "./cost-chart.model";
import { AppChartType } from "./chart-type.model";
import { AmountChart } from "./amount-chart.model";

@Injectable({providedIn: 'root'})
export class ChartsService {
    private readonly amountChart = inject(AmountChart);
    private readonly costChart = inject(CostChart);

    private _activeChart = signal<Chart>(inject(CostChart));
    activeChart = this._activeChart.asReadonly();

    setChart(chartType: AppChartType): void {
        const mapTypeToChart = (type: AppChartType): Chart => {
            switch(type) {
                case AppChartType.AmountChart:
                    return this.amountChart;
                case AppChartType.CostChart:
                    return this.costChart;    
            }
        }

        this._activeChart.set(mapTypeToChart(chartType));
    }
}