import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  recipes: Recipe[];
  recipeControl: FormControl = new FormControl();
  id: number;

  constructor(
    private _recipeService: RecipeService,
    private _router: Router
  ) {
    this.recipes = this._recipeService.getRecipes();
    this.recipeControl.valueChanges
      .subscribe(id => {
        this.id = id;
        // console.log(id);
        this._router.navigate(['recipes', id]);
      });
  }

  ngOnInit() {
  }

}
