import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

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

  constructor(private fb: FormBuilder) {}

  public clearFilter(): void {

  }

  public filterResults(): void {

  }
}
