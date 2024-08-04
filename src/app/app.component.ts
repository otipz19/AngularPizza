import { Component } from '@angular/core';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pizza';
}
