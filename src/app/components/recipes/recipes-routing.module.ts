import { RecipeComponent } from './../recipe/recipe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'new',
    loadChildren: () => import('../recipe/recipe-routing.module').then(m => m.RecipeRoutingModule)
  },
  {
    path: ':id',
    loadChildren: () => import('../recipe/recipe-routing.module').then(m => m.RecipeRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
