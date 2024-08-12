import { ChartType, Row } from 'angular-google-charts';
import { BasketItem } from '../../../basket/basket-item/basket-item.model';
import { Chart } from './chart.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CostChart implements Chart {
  type = ChartType.BarChart;
  title = 'Статистика розподілу вартості замовленої піци';
  columns = ['Назва', 'Вартість'];
  options = {
    colors: ['#e6ac4f'],
  };
  data!: Row[];

  resolveData(basketItems: BasketItem[]) {
    this.data = basketItems.map((item) => [item.pizza.title, item.totalPrice]);
  };
}
