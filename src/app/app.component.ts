import { Component } from '@angular/core';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzaListComponent, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pizza';
}
