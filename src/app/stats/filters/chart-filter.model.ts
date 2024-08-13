import { RadioOption } from "../../shared/radio-options/radio-option/radio-option.model";
import { AppChartType } from "../chart/charts/chart-type.model";

export interface ChartFilter extends RadioOption {
    chartType: AppChartType;
}