import { AfterViewInit, Component, computed, inject, viewChildren } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";
import { Filter } from './filter/filter.model';
import { filters as DEFINED_FILTERS } from './defined-filters';
import { PizzaListService } from '../pizza-list/pizza-list.service';
import { RoundSpanComponent } from '../shared/round-span/round-span.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FilterComponent, RoundSpanComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements AfterViewInit {
  private readonly pizzaListService = inject(PizzaListService);

  private filterComponents = viewChildren(FilterComponent);
  filters: Filter[] = DEFINED_FILTERS;
  activeFilter? : Filter;
  
  pizzaCount = computed(() => this.pizzaListService.filteredPizza().length);
  
  onFilter(filter: Filter) {
    this.pizzaListService.setFilter(filter);
    this.activeFilter = filter;
  }

  ngAfterViewInit(): void {
    this.filterComponents()[0].activate();
  }
}
