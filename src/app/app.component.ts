import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzaCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pizza';
}
