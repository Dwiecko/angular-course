import { Component } from '@angular/core';
import { RecipeListComponent } from './ui/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './ui/recipe-detail/recipe-detail.component';
import { RecipeModel } from './core/recipe/model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-manager';

  selectedRecipe: { recipeModel: RecipeModel } | null = null;

  onRecipeSelected(recipe: RecipeModel) {
    this.selectedRecipe = { recipeModel: recipe };
  }
}
