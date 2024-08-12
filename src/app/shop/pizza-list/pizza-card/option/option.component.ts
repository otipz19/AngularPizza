import { Component, input, output } from '@angular/core';
import { PizzaOption } from './option.model';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [ButtonComponent],
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
