import { computed, Injectable, signal } from '@angular/core';
import { Pizza } from './pizza-card/pizza.model';
import { PIZZA_LIST } from './pizza-list.data';
import { Filter } from '../filters/filter/filter.model';

@Injectable({ providedIn: 'root' })
export class PizzaListService {
  private pizzaList: Pizza[] = PIZZA_LIST;
  private filter = signal<Filter | undefined>(undefined);

  filteredPizza = computed(() => {
    if (this.filter()) {
      return this.filter()!.filter(this.pizzaList);
    } else {
      return this.pizzaList;
    }
  });

  setFilter(filter: Filter): void {
    this.filter.set(filter);
  }
}
