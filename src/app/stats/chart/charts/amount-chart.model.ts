import { ChartType, Row } from 'angular-google-charts';
import { BasketItem } from '../../../basket/basket-item/basket-item.model';
import { Chart } from './chart.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AmountChart implements Chart {
  type = ChartType.PieChart;
  title = 'Статистика розподілу кількості замовленої піци';
  columns = ['Назва', 'Кількість'];
  options = {
    is3D: true,
    colors: [
      '#e6ac4f', // Original
      '#de722a', // Original
      '#f5b26b', // Lighter yellow-orange
      '#f48c42', // Lighter orange
      '#ec8b2f', // Vibrant orange
      '#d97a21', // Deep orange
      '#c86d1c', // Darker orange
      '#b56316', // Dark burnt orange
      '#f7bf83', // Soft apricot
      '#ff9c4a', // Bright tangerine
      '#f4973d', // Warm pumpkin
      '#e88b33', // Autumn orange
      '#d67c29', // Rusty orange
      '#c3711f', // Rich ochre
      '#ab5e14', // Deep sienna
    ],
  };
  data!: Row[];

  resolveData(basketItems: BasketItem[]) {
    this.data = basketItems.map((item) => [item.pizza.title, item.amount]);
  }
}
