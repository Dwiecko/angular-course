import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeListElementComponent } from '../recipe-list-element/recipe-list-element.component';
import { RecipeModel } from '../../core/recipe/model';
import { RecipeService } from '../../core/recipe/services';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeListElementComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: RecipeModel[]  = []
  selectedRecipeTitle: string = '';

  @Output() recipeSelected = new EventEmitter<RecipeModel>();
  @Output() recipeRemoved = new EventEmitter<number>();

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeClick(listElement: RecipeModel & { selectedRecipeTitle: string }) {
    this.selectedRecipeTitle = listElement.selectedRecipeTitle;
    this.recipeSelected.emit(listElement);
  }

  onDeleteRecipe(id: number) {
      this.recipeService.deleteRecipe(id);
      this.recipes = this.recipeService.getRecipes();
  }

  constructor(private recipeService: RecipeService) {
    
  }
}
