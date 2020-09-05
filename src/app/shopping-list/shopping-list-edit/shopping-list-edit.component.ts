import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem(name:HTMLInputElement, amount:HTMLInputElement){
    let ingName = name.value.toString();
    let ingAmt = parseInt(amount.value);
    let newIngredient = new Ingredient(ingName, ingAmt);
    this.shoppingListService.onItemAdded(newIngredient);
  }
  
}