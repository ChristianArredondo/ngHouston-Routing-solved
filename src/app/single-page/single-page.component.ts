import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  recipeControl: FormControl = new FormControl();
  recipes: Recipe[];
  recipe: Recipe;
  id: number;

  constructor(
    private _recipeService: RecipeService
  ) {
    this.recipes = this._recipeService.getRecipes();
  }

  ngOnInit() {
    this.recipeControl.valueChanges
      .subscribe(id => {
        this.id = id;
        this.recipe = this.recipes[id];
      });
  }

  fetchRecipe (id: number) {
    return this._recipeService.getRecipes()[this.id];
  }

  onClear () {
    this.recipe = null;
  }

}
