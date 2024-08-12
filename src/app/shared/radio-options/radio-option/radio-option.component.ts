import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'app-radio-option',
  standalone: true,
  imports: [],
  templateUrl: './radio-option.component.html',
  styleUrl: './radio-option.component.css'
})
export class RadioOptionComponent {
  option = input.required<RadioOption>();
  choose = output<RadioOption>();

  private labelElement = viewChild.required<ElementRef<HTMLLabelElement>>('label');

  onClick() {
    this.choose.emit(this.option());
  }

  activate() {
    this.labelElement().nativeElement.click();
  }
}
