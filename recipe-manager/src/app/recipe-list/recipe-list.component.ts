import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  standalone: true,
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes = [
    { title: 'Spaghetti Carbonara', description: 'Klasyczne włoskie danie.' },
    { title: 'Pancakes', description: 'Puszyste naleśniki z miodem.' },
    { title: 'Tacos', description: 'Meksykańskie tacos z wołowiną i salsą.' }
  ];

  // ####################  krok 6
  @Output() recipeSelected = new EventEmitter<{ title: string, description: string }>();

  onRecipeClick(recipe: { title: string, description: string }) {
    this.recipeSelected.emit(recipe);
  }

  // ####################
}