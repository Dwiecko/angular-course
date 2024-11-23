import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../core/recipe/model';


@Component({
  selector: 'app-recipe-list-element',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list-element.component.html',
  styleUrl: './recipe-list-element.component.scss',
})
export class RecipeListElementComponent {
  @Input() recipe: RecipeModel | undefined = undefined;
  @Output() recipeSelected = new EventEmitter<RecipeModel & { selectedRecipeTitle: string }>();

  onRecipeClick(recipe: RecipeModel) {
    const toEmit = { ...recipe, selectedRecipeTitle: recipe.title };
    this.recipeSelected.emit(toEmit);
  }
}
