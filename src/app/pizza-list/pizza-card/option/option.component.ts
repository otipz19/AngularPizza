import { Component, input, output } from '@angular/core';
import { PizzaOption } from './option.model';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  option = input.required<PizzaOption>();
  buy = output<PizzaOption>();

  onBuy() {
    this.buy.emit(this.option());
  }
}
