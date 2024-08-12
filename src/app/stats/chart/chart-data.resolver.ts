import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterState, RouterStateSnapshot } from "@angular/router";
import { BasketItem } from "../../basket/basket-item/basket-item.model";
import { inject } from "@angular/core";
import { BasketService } from "../../basket/basket.service";

export const resolveChartData: ResolveFn<BasketItem[]> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
    return inject(BasketService).basket();
};