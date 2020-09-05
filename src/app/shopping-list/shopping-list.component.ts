import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingListUpdatedRef: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListUpdatedRef = 
      this.shoppingListService.shoppingListUpdated.subscribe(ingredients => {
      this.ingredients = ingredients;
    })
    
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy() {
    this.shoppingListUpdatedRef.unsubscribe();
  }
}
