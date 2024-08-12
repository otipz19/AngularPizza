import { PizzaOption } from "./option/option.model";
import { Tag } from "./tag/tag.model";

export interface Pizza {
  id: number;
  tag?: Tag;
  img: string;
  title: string;
  subtitle: string;
  categories: string[];
  description: string;
  options: PizzaOption[];
}
