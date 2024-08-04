import { Component } from "@angular/core";
import { OptionComponent } from "./option/option.component";

@Component({
    selector: 'app-pizza-card',
    standalone: true,
    templateUrl: './pizza-card.component.html',
    styleUrl: './pizza-card.component.css',
    imports: [OptionComponent],
})
export class PizzaCardComponent {

}