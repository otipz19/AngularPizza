import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Filter } from './filter.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filter = input.required<Filter>();
  choose = output<Filter>();

  private labelElement = viewChild.required<ElementRef<HTMLLabelElement>>('label');

  onClick() {
    this.choose.emit(this.filter());
  }

  activate() {
    this.labelElement().nativeElement.click();
  }
}
