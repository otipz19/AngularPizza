import { Component, computed, inject } from '@angular/core';
import { Filter } from './filter/filter.model';
import { filters as DEFINED_FILTERS } from './defined-filters';
import { PizzaListService } from '../pizza-list/pizza-list.service';
import { RoundSpanComponent } from '../../shared/round-span/round-span.component';
import { RadioOptionsComponent } from '../../shared/radio-options/radio-options.component';
import { RadioOption } from '../../shared/radio-options/radio-option/radio-option.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [RadioOptionsComponent, RoundSpanComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  private readonly pizzaListService = inject(PizzaListService);

  filters: Filter[] = DEFINED_FILTERS;
  activeFilter?: Filter;

  title =
    !this.activeFilter || this.activeFilter.value === 'all'
      ? 'Усі піци'
      : `Піци ${this.activeFilter.text.toLocaleLowerCase()}`;

  pizzaCount = computed(() => this.pizzaListService.filteredPizza().length);

  onFilter(option: RadioOption) {
    const filter = option as Filter;
    this.pizzaListService.setFilter(filter);
    this.activeFilter = filter;
  }
}
