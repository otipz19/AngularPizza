import { ChartType, Row } from 'angular-google-charts';
import { BasketItem } from '../../../basket/basket-item/basket-item.model';
import { Chart } from './chart.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CostChart extends Chart {
  type = ChartType.BarChart;
  title = 'Статистика розподілу вартості замовленої піци';
  columns = ['Назва', 'Вартість'];
  options = {
    colors: ['#e6ac4f'],
  };

  protected override mapBasketItem(item: BasketItem): Row {
    return [item.pizza.title, item.totalPrice];
  }
}
