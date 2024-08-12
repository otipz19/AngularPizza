import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../basket.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basket-footer',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './basket-footer.component.html',
  styleUrl: './basket-footer.component.css'
})
export class BasketFooterComponent {
  private readonly basketService = inject(BasketService);

  totalPrice = this.basketService.totalPrice;
  disableOrderBtn = computed(() => this.basketService.basket().length === 0);
}
