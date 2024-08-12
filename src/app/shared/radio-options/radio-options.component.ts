import { Component, input, output } from '@angular/core';
import { RadioOption } from './radio-option/radio-option.model';
import { RadioOptionComponent } from "./radio-option/radio-option.component";

@Component({
  selector: 'app-radio-options',
  standalone: true,
  imports: [RadioOptionComponent],
  templateUrl: './radio-options.component.html',
  styleUrl: './radio-options.component.css'
})
export class RadioOptionsComponent {
  title = input.required<string>();
  amount = input.required<number>();
  options = input.required<RadioOption[]>();

  choose = output<RadioOption>();

  onChoose(option: RadioOption) {
    this.choose.emit(option);
  }
}
