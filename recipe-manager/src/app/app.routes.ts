import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './ui/recipe-detail';
import { RecipeListComponent } from './ui/recipe-list';
import { RecipeTemplateFormComponent } from './ui/recipe-template-form/recipe-template-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // domyślna ścieżka, która przekierowuje na /recipes jeśli nie ma podanej innej ścieżki.
    { path: 'recipes', component: RecipeListComponent }, // ścieżka do widoku listy przepisów.
    { path: 'recipe/add', component: RecipeTemplateFormComponent }, // ścieżka do formularza dodawania nowego przepisu.
    { path: 'recipe/edit/:id', component: RecipeTemplateFormComponent }, // ścieżka do formularza edycji przepisu, gdzie :id jest dynamicznym parametrem.
    { path: 'recipe/:id', component: RecipeDetailComponent } //  ścieżka do szczegółów wybranego przepisu.
    ];