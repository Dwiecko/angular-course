import { Component, Input, OnInit } from '@angular/core';
import { RecipeListComponent } from './ui/recipe-list';
import { RecipeDetailComponent } from './ui/recipe-detail/';
import { RecipeModel } from './core/recipe/model';
import { RecipeTemplateFormComponent } from './ui/recipe-template-form/recipe-template-form.component';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule, NgModel } from '@angular/forms';
import { RecipeReactiveFormComponent } from './ui/recipe-reactive-form/recipe-reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent, RecipeReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-manager';

  selectedRecipe: RecipeModel | null = null;

  onRecipeSelected(recipe: RecipeModel | null) {
    this.selectedRecipe = recipe;
  }
}
