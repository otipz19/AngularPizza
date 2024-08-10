import { Component, inject } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";
import { Filter } from './filter/filter.model';
import { filters as DEFINED_FILTERS } from './defined-filters';
import { PizzaListService } from '../pizza-list/pizza-list.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  private readonly pizzaListService = inject(PizzaListService);
  filters: Filter[] = DEFINED_FILTERS;

  onFilter(filter: Filter) {
    this.pizzaListService.setFilter(filter);
  }
}
