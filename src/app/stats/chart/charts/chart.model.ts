import { ChartType, Row } from 'angular-google-charts';
import { BasketItem } from '../../../basket/basket-item/basket-item.model';

export interface Chart {
  type: ChartType;
  title: string;
  columns: string[];
  options: { colors?: string[]; is3D?: boolean };
  data: Row[];

  resolveData: (basketItems: BasketItem[]) => void;
}
