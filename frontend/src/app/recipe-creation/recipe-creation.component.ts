import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators'
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recipe-creation.component.html',
  styleUrl: './recipe-creation.component.scss'
})
export class RecipeCreationComponent {

  recipeForm = this.fb.group({
    id: Math.floor(1000 + Math.random() * 9000),
    title: [''],
    ingredients: [''],
    steps: [''],
  });
  valueChanges$!: Observable<any>;

  constructor(private fb: FormBuilder, private service: RecipesService) {
    this.valueChanges$ = this.recipeForm.valueChanges.pipe(
      concatMap(formValue => this.service.saveRecipe(formValue))
    );
  }
}
