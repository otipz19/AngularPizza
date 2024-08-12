import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { BasketComponent } from './basket/basket.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ShopComponent,
    BasketComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-pizza';
  private readonly router = inject(Router);
  shouldShowSidebar = false;

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({
        next: value => {
          this.shouldShowSidebar = this.router.url === '/' || this.router.url === '/shop';
        },
      });
  }
}
