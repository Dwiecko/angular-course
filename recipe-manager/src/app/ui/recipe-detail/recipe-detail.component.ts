
import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../core/recipe/model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: {recipeModel: RecipeModel } | null = null;
}
