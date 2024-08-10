import { Component, inject } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-footer',
  standalone: true,
  imports: [],
  templateUrl: './basket-footer.component.html',
  styleUrl: './basket-footer.component.css'
})
export class BasketFooterComponent {
  private readonly basketService = inject(BasketService);

  totalPrice = this.basketService.totalPrice;
}
