import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.scss'
})
export class RecipesFilterComponent {

  recipeForm = this.fb.group({
    title: ['']
  });

  constructor(private service: RecipesService, private fb: FormBuilder) {}

  public filterResults(): void {
    this.service.updateFilter(this.recipeForm.value.title ?? '');
  }
}
