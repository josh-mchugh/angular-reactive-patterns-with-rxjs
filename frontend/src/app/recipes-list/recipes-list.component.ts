import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class RecipesListComponent implements OnInit, OnDestroy {
  filteredRecipes: Recipe[] = [];
  recipes: Recipe[] = [];
  private destroy$ = new Subject<void>();

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.service.getRecipes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.filteredRecipes = this.filterResults();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filterResults(): Recipe[] {
    console.log(this.service.nameFilter);
    return this.recipes.filter(recipe => recipe.title?.includes(this.service.nameFilter));
  }
}
