import { RadioOption } from "../../shared/radio-options/radio-option/radio-option.model";
import { Chart } from "../chart/charts/chart.model";

export interface ChartFilter extends RadioOption {
    chart: Chart;
}