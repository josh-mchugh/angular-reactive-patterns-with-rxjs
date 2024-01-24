import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { Recipe } from '../core/model/recipe.model';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [ButtonModule, DataViewModule, FormsModule, RatingModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  destroy$ = new Subject<void>();

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.service.getRecipes()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(result => {
        this.recipes = result;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
