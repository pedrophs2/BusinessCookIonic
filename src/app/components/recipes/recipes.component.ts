import { Component, OnInit } from '@angular/core';
import { RecipeController } from 'src/controllers/recipe.controller';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  recipes: any[] = []

  constructor(private recipeController: RecipeController) { }

  ngOnInit() {
    this.getAllRecipes()
  }

  private async getAllRecipes() {
    let recipes = await this.recipeController.getAll()
    this.recipes = recipes.response
  }

}
