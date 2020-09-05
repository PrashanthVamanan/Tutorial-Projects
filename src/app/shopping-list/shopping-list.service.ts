import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService implements OnInit {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  shoppingListUpdated = new Subject<Ingredient[]>();

  ngOnInit() {
   
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  onItemAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingListUpdated.next(this.getIngredients());
  }

}