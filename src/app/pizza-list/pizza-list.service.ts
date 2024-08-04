import { Injectable } from '@angular/core';
import { Pizza } from './pizza-card/pizza.model';
import { PIZZA_LIST } from './pizza-list.data';

@Injectable({ providedIn: 'root' })
export class PizzaListService {
    private pizzaList = PIZZA_LIST;

    get(filter?: string) {
        return [...this.pizzaList];
    }
}
