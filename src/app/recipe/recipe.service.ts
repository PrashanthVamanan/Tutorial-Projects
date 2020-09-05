import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'Super Tasty Schnitzel - just awesome!', 
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
       [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)
       ]),
    new Recipe(
      'A Big Fat Burger', 
      'What else you need to say?', 
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
       [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
       ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  onAddedToShoppingList(ingredients: Ingredient[]) {
   ingredients.forEach(ingredient => {
    this.shoppingListService.onItemAdded(ingredient);
   })
  }

  getRecipeById(recipeId: number) {
    return this.recipes.slice()[recipeId];
  }

}