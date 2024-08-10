import { Component } from '@angular/core';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { FiltersComponent } from './filters/filters.component';
import { BasketComponent } from "./basket/basket.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzaListComponent, FiltersComponent, BasketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pizza';
}
