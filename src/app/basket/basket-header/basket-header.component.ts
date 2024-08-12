import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../basket.service';
import { RoundSpanComponent } from '../../shared/round-span/round-span.component';

@Component({
  selector: 'app-basket-header',
  standalone: true,
  imports: [RoundSpanComponent],
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
