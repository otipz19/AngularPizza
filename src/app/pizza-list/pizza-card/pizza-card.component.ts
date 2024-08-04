import { Component, input } from "@angular/core";
import { OptionComponent } from "./option/option.component";
import { Pizza } from "./pizza.model";
import { TagComponent } from "./tag/tag.component";

@Component({
    selector: 'app-pizza-card',
    standalone: true,
    templateUrl: './pizza-card.component.html',
    styleUrl: './pizza-card.component.css',
    imports: [OptionComponent, TagComponent],
})
export class PizzaCardComponent {
    pizza = input.required<Pizza>();
}