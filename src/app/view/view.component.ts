import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  recipe: Recipe;
  recipes: Recipe[];
  id: number;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    // this.id = 0;
    this.recipes = this._recipeService.getRecipes();
    this._route.params
    .subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this._recipeService.getRecipes()[params.id];
    });
    console.log(this.recipe);
  }

  onNext () {
    this.id === this.recipes.length - 1 ? this.id = 0 : this.id ++;
    this._router.navigate(['recipes', this.id]);
  }

}
