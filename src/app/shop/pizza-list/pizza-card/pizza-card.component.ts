import { Component, inject, input } from "@angular/core";
import { OptionComponent } from "./option/option.component";
import { Pizza } from "./pizza.model";
import { TagComponent } from "./tag/tag.component";
import { PizzaOption } from "./option/option.model";
import { BasketService } from "../../../basket/basket.service";

@Component({
    selector: 'app-pizza-card',
    standalone: true,
    templateUrl: './pizza-card.component.html',
    styleUrl: './pizza-card.component.css',
    imports: [OptionComponent, TagComponent],
})
export class PizzaCardComponent {
    private readonly basketService = inject(BasketService);
    pizza = input.required<Pizza>();

    onBuy(option: PizzaOption) {
        this.basketService.add(this.pizza(), option);
    }
}