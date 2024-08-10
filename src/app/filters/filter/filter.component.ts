import { Component, input, output } from '@angular/core';
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

  onClick() {
    this.choose.emit(this.filter());
  }
}
