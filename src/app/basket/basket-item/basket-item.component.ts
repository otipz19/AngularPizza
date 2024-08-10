import { Component, inject, input } from '@angular/core';
import { BasketItem } from './basket-item.model';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  imports: [],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
  private readonly basketService = inject(BasketService);
  item = input.required<BasketItem>();

  onReduce() {
    this.basketService.reduce(this.item());
  }

  onAdd() {
    this.basketService.add(this.item().pizza, this.item().option);
  }

  onRemove() {
    this.basketService.remove(this.item().pizza, this.item().option);
  }
}
