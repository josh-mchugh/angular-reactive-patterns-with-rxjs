import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { Recipe } from '../core/model/recipe.model';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DataViewModule,
    FormsModule,
    RatingModule
  ],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
})
export class RecipesListComponent {
  recipes$!: Observable<Recipe[]>;

  constructor(private service: RecipesService) {
    this.recipes$ = combineLatest([this.service.getRecipes(), this.service.getFilterObservable()])
      .pipe(
        map(([recipes, filter]) => {
          return recipes.filter(recipe => recipe.title?.toLowerCase().includes(filter.toLowerCase()))
        })
      );
  }
}
