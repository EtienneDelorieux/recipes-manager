import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

interface IngredientCategory {
  name: string;
  ingredients: Ingredient[];
}

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private ingredients: IngredientCategory[] = [
    {
      name: 'Protéine',
      ingredients: [
        {name: 'Poulet', category: 'Protéine', unit: 'g'},
        {name: 'Boeuf hachée', category: 'Protéine', unit: 'g'},
        {name: 'Jambon', category: 'Protéine', unit: 'g'},
        {name: 'Tofu', category: 'Protéine', unit: 'g'},
        {name: 'Boulettes végétales', category: 'Protéine', unit: 'g'},
      ]
    },
    {
      name: 'Glucides',
      ingredients: [
        {name: 'Riz', category: 'Glucides', unit: 'g'},
        {name: 'Tagliatelles', category: 'Glucides', unit: 'g'},
        {name: 'Pâtes lunes', category: 'Glucides', unit: 'g'},
        {name: 'Semoule', category: 'Glucides', unit: 'g'},
        {name: 'Perles de blé', category: 'Glucides', unit: 'g'},
        {name: 'Pomme de terre', category: 'Glucides', unit: 'g'},
        {name: 'Patate douce', category: 'Glucides', unit: 'g'},
      ]
    },
    {
      name: 'Légumes',
      ingredients: [
        {name: 'Poivron', category: 'Légumes', unit: 'u'},
        {name: 'Courgette', category: 'Légumes', unit: 'u'},
        {name: 'Carotte', category: 'Légumes', unit: 'u'},
        {name: 'Petit pois', category: 'Légumes', unit: 'g'},
        {name: 'Mais', category: 'Légumes', unit: 'g'},
        {name: 'Tomates', category: 'Légumes', unit: 'g'},
        {name: 'Epinard', category: 'Légumes', unit: 'g'},
        {name: 'Choux-fleur', category: 'Légumes', unit: 'u'},
      ]
    },
    {
      name: 'Fruits',
      ingredients: [
        {name: 'Banane', category: 'Fruits', unit: 'u'},
        {name: 'Kiwi', category: 'Fruits', unit: 'u'},
        {name: 'Pomme', category: 'Fruits', unit: 'u'},
      ]
    },
    {
      name: 'Produits laitiers',
      ingredients: [
        {name: 'Yaourt grec', category: 'Produits laitiers', unit: 'u'},
        {name: 'Yaourts', category: 'Produits laitiers', unit: 'u'},
        {name: 'Creme cuisine', category: 'Produits laitiers', unit: 'ml'},
        {name: 'Creme cafe', category: 'Produits laitiers', unit: 'ml'},
        {name: 'Lait', category: 'Produits laitiers', unit: 'ml'},
        {name: 'Lait', category: 'Produits laitiers', unit: 'ml'},
        {name: 'Fromage Suisse', category: 'Produits laitiers', unit: 'g'},
      ]
    },
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }
}
