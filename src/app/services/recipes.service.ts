import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      name: 'Gratin patates douces/courgettes',
      ingredients: [
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Creme', quantity: 200, unit: 'ml'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Ail'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    },
    {
      name: 'Gratin patates douces/courgettes',
      ingredients: [
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Creme', quantity: 200, unit: 'ml'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    },
    {
      name: 'Gratin patates douces/courgettes',
      ingredients: [
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Creme', quantity: 200, unit: 'ml'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Ail'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    },
    {
      name: 'Gratin patates douces/courgettes',
      ingredients: [
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Creme', quantity: 200, unit: 'ml'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Ail'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Ail'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    },
    {
      name: 'Gratin patates douces/courgettes',
      ingredients: [
        {name: 'Creme', quantity: 200, unit: 'ml'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Ail'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    },
    {
      name: 'Gratin patates douces/courgettes',
      ingredients: [
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Creme', quantity: 200, unit: 'ml'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Ail'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    },
    {
      name: 'Gratin patates douces/courgettes 2',
      ingredients: [
        {name: 'Patate douce', quantity: 2, unit: 'u'},
        {name: 'Courgette', quantity: 2, unit: 'u'},
        {name: 'Creme', quantity: 200, unit: 'ml'},
        {name: 'Fromage suisse', quantity: 100, unit: 'g'},
        {name: 'Viande hachée', quantity: 400, unit: 'g'},
        {name: 'Ail'},
      ],
      categories: ['Gratin', 'Plat lourd', 'Viande'],
      imagePath: 'http://img.over-blog-kiwi.com/0/80/86/06/20171110/ob_c3270a_gratin-patate-douce-courgettes.jpg'
    }
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
