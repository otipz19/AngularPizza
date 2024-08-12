import { Component } from '@angular/core';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [PizzaListComponent, FiltersComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
