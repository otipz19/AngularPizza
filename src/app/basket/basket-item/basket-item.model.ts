import { PizzaOption } from '../../pizza-list/pizza-card/option/option.model';
import { Pizza } from '../../pizza-list/pizza-card/pizza.model';

export class BasketItem {
  amount: number = 1;

  get id(): string {
    return BasketItem.getId(this.pizza, this.option);
  }

  static getId(pizza: Pizza, option: PizzaOption) {
    return `${pizza.id}|${option.id}`;
  }

  get totalPrice() {
    return this.option.price * this.amount;
  }

  constructor(public pizza: Pizza, public option: PizzaOption) {}
}
