import { Ingredient } from './ingredient.model';

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  categories: string[];
  imagePath?: string;
}
