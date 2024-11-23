import { Injectable } from '@angular/core';
import { RecipeModel } from '../model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: RecipeModel[] = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'Klasyczne włoskie danie.',
      ingredients: ['makaron', 'woda'],
      preparationTime: 15,
      difficulty: 'easy',
    },
    {
      id: 2,
      title: 'Pancakes',
      description: 'Puszyste naleśniki z miodem.',
      ingredients: ['mleko', 'woda'],
      preparationTime: 30,
      difficulty: 'medium'
    },
    {
      id: 3,
      title: 'Tacos',
      description: 'Meksykańskie tacos z wołowiną i salsą.',
      ingredients: ['tortilla'],
      preparationTime: 60,
      difficulty: 'hard'
    }
  ];
  constructor() {}

  getRecipes(): RecipeModel[] {
    return this.recipes;
  }

  deleteRecipe(id: number): void {
      this.recipes = this.getRecipes().filter(r => r.id !== id);
  }
}
