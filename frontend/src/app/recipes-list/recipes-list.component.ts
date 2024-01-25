import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  recipes$: Observable<Recipe[]>;

  constructor(private service: RecipesService) {
    this.recipes$ = this.service.getRecipes();
  }
}
