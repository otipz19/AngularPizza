import { Component, effect, inject } from '@angular/core';
import { BasketHeaderComponent } from './basket-header/basket-header.component';
import { BasketFooterComponent } from './basket-footer/basket-footer.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [BasketHeaderComponent, BasketFooterComponent, BasketItemComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  private readonly basketService = inject(BasketService);
  
  basket = this.basketService.basket;
}
