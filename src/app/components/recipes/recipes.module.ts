import { RecipesComponent } from './recipes.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeController } from 'src/controllers/recipe.controller';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  RecipesComponent
]

const providers = [
  RecipeController
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers: [...providers]
})
export class RecipesModule { }
