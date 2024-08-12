import { Component, inject } from "@angular/core";
import { PizzaListService } from "./pizza-list.service";
import { PizzaCardComponent } from "./pizza-card/pizza-card.component";

@Component({
    selector: 'app-pizza-list',
    standalone: true,
    templateUrl: 'pizza-list.component.html',
    styleUrl: 'pizza-list.component.css',
    imports: [PizzaCardComponent],
})
export class PizzaListComponent{
    private pizzaListService = inject(PizzaListService);

    pizzaList = this.pizzaListService.filteredPizza;
}