import {
  afterNextRender,
  computed,
  effect,
  Injectable,
  signal,
} from '@angular/core';
import { BasketItem } from './basket-item/basket-item.model';
import { PizzaOption } from '../shop/pizza-list/pizza-card/option/option.model';
import { Pizza } from '../shop/pizza-list/pizza-card/pizza.model';

@Injectable({ providedIn: 'root' })
export class BasketService {
  private readonly LS_KEY = 'ANGULAR_PIZZA_BASKET';

  private _basket = signal<BasketItem[]>([]);
  basket = this._basket.asReadonly();

  totalPrice = computed(() =>
    this._basket().reduce((total, curItem) => total + curItem.totalPrice, 0)
  );

  constructor() {
    let savedBasket = window.localStorage.getItem(this.LS_KEY);
    if (savedBasket) {
      let parsed: {pizza: Pizza, option: PizzaOption, amount: number}[] = JSON.parse(savedBasket);
      this._basket.set(parsed.map(item => new BasketItem(item.pizza, item.option, item.amount)));
    }

    effect(() => {
      window.localStorage.setItem(this.LS_KEY, JSON.stringify(this._basket()));
    });
  }

  add(pizza: Pizza, option: PizzaOption) {
    let item = this.find(pizza, option);
    if (item) {
      item.amount++;
      //this is pretty dumb workaround with signals
      this._basket.update((old) => [...old]);
    } else {
      this._basket.update((old) => [...old, new BasketItem(pizza, option)]);
    }
  }

  reduce(item: BasketItem) {
    item.amount--;
    if (item.amount <= 0) {
      this.remove(item.pizza, item.option);
    } else {
      this._basket.update((old) => [...old]);
    }
  }

  private find(pizza: Pizza, option: PizzaOption): BasketItem | undefined {
    return this._basket().find(
      (item) => item.id === BasketItem.getId(pizza, option)
    );
  }

  remove(pizza: Pizza, option: PizzaOption) {
    this._basket.update((old) =>
      old.filter((item) => item.id !== BasketItem.getId(pizza, option))
    );
  }

  clear() {
    this._basket.set([]);
  }
}
