import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients.service';
import RECIPE_CATEGORIES from '../../shared/constants/recipe-categories.constant';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  ingredients: Ingredient[];
  recipeCategories;

  constructor(
    private recipeService: RecipesService,
    private ingredientService: IngredientsService
    ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.ingredients = this.ingredientService.getIngredients();
    this.recipeCategories = RECIPE_CATEGORIES;
    console.log('this.recipeCategories', this.recipeCategories);
  }
}
