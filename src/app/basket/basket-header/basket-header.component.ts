import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-header',
  standalone: true,
  imports: [],
  templateUrl: './basket-header.component.html',
  styleUrl: './basket-header.component.css'
})
export class BasketHeaderComponent {
  private readonly basketService = inject(BasketService);

  ordersAmount = computed(() => this.basketService.basket().length);

  onClear() {
    this.basketService.clear();
  }
}
