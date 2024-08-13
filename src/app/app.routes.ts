import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

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
        loadComponent: () => import('./stats/stats.component').then(mod => mod.StatsComponent),
    }
];
