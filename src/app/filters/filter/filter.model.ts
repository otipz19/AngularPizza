import { Pizza } from '../../pizza-list/pizza-card/pizza.model';

export class Filter {
  value: string;
  text: string;

  constructor(
    value: string,
    text: string,
    filter?: (list: Pizza[]) => Pizza[]
  ) {
    this.value = value;
    this.text = text;

    if (filter) {
      this.filter = filter;
    }
  }

  filter(list: Pizza[]): Pizza[] {
    return list.filter((pizza) =>
      pizza.categories.find((c) => c === this.value)
    );
  }
}
