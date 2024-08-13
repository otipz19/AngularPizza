import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full',
    },
    {
        path: 'shop',
        component: ShopComponent,
    },
    {
        path: 'stats',
        component: StatsComponent,
    }
];
