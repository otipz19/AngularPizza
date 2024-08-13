import { ChartType, Row } from 'angular-google-charts';
import { BasketItem } from '../../../basket/basket-item/basket-item.model';
import { inject } from '@angular/core';
import { BasketService } from '../../../basket/basket.service';

export abstract class Chart {
  protected readonly basketService = inject(BasketService);

  abstract type: ChartType;
  abstract title: string;
  abstract columns: string[];
  abstract options: { colors?: string[]; is3D?: boolean };
  readonly data: Row[] = this.resolveData();

  private resolveData(): Row[] {
    return this.basketService.basket().map(this.mapBasketItem);
  }

  protected abstract mapBasketItem(item: BasketItem): Row;
}
