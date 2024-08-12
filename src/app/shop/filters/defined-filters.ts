import { Pizza } from '../pizza-list/pizza-card/pizza.model';
import { Filter } from './filter/filter.model';

export const filters: Filter[] = [
  new Filter('all', 'Усі', (list: Pizza[]) => {
    return [...list];
  }),
  new Filter('meat', "М'ясні"),
  new Filter('pineapple', 'З ананасами'),
  new Filter('mushrooms', 'З грибами'),
  new Filter('seafood', 'З морепродуктами'),
  new Filter('vegan', 'Вега'),
];
