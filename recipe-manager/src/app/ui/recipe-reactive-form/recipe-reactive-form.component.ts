import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecipeModel } from '../../core/recipe/model';
import { RecipeService } from '../../core/recipe/service';

@Component({
  selector: 'app-recipe-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-reactive-form.component.html',
  styleUrl: './recipe-reactive-form.component.scss',
})
export class RecipeReactiveFormComponent implements OnInit {
  @Input() isEditMode = false;
  @Input() currentRecipe: RecipeModel | null = null;

  showForm = false;
  recipeFormGroup!: FormGroup;

  // wstrzykujemy FormBuildera, to dzięki niemu będziemy w stanie zbudować reactive forms
  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  // definiujemy nasza formGroup dzięki FormBuilder'owi, zauważ że na tym poziomie defiuniujesz strukturę, wartośc początkową, walidatory i tak dalej.
  ngOnInit(): void {
    this.recipeFormGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      ingredients: ['', Validators.required],
      preparationTime: ['', Validators.required],
      difficulty: ['easy', Validators.required]
    });

    // metoda patchValue inteligętnie podmienia wartości kontrolek podanych jako wartość wejściowa funkcji
    if (this.currentRecipe) {
      this.recipeFormGroup.patchValue(this.currentRecipe);
    }
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSubmit(): void {
    console.log(1)

    if (this.recipeFormGroup.valid) {
      const newRecipe: RecipeModel = {
        id: this.isEditMode ? this.currentRecipe!.id : Date.now(),
        ...this.recipeFormGroup.value, // ta linijka tworzy 'shadow copy' obecnych wartości formularza i je tu wrzuca, dzięki temu nie musimy ich deklarować ręcznie jeżeli się nie zmianiają, nie są mapowane, parsowane itp.
        ingredients: this.recipeFormGroup.value.ingredients.split(','), // metoda pomocnicza split(',') znajduje w ciągu znaków ',' i na tej podstawie rozdziela ciąg na części
        preparationTime: this.recipeFormGroup.value.preparationTime,
        difficulty: this.recipeFormGroup.value.difficulty,
        description: this.recipeFormGroup.value.description
      };

      if (this.isEditMode) {
        this.recipeService.editRecipe(newRecipe);
      } else {
        this.recipeService.addRecipe(newRecipe);
      }

      this.recipeFormGroup.reset();
      this.showForm = false;
    }
  }
}
