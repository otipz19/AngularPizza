import { Component, input } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { BasketItem } from '../basket/basket-item/basket-item.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  basket = input.required<BasketItem[]>();
}
