import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeInfoComponent  } from './recipe/recipe-info/recipe-info.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeInfoComponent },
      { path: 'add', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }