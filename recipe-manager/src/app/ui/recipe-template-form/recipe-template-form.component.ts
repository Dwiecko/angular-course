import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-template-form',
  standalone: true,
  imports: [],
  templateUrl: './recipe-template-form.component.html',
  styleUrl: './recipe-template-form.component.scss'
})
export class RecipeTemplateFormComponent {
  showForm: boolean = false

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
