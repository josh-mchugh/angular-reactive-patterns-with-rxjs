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
    title: ['Lemon']
  });

  constructor(private service: RecipesService, private fb: FormBuilder) {
    this.filterResults();
  }

  public filterResults(): void {
    this.service.setNameFilter(this.recipeForm.value.title ?? '');
  }
}
