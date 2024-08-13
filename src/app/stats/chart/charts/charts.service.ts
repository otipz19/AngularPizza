import { inject, Injectable, signal } from "@angular/core";
import { Chart } from "./chart.model";
import { CostChart } from "./cost-chart.model";

@Injectable({providedIn: 'root'})
export class ChartsService {
    private _activeChart = signal<Chart>(inject(CostChart));
    activeChart = this._activeChart.asReadonly();

    setChart(chart: Chart) {
        this._activeChart.set(chart);
    }
}