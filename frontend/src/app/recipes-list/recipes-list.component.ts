import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

    // Chapter 5 - The Replace Strategy
    const stream$ = from(['5', '10', '6', 'Hello', '2']);
    stream$.pipe(
      map((value) => {
        if(isNaN(value as any)) {
          throw new Error('This is not a number');
        }
        return parseInt(value);
      }),
      catchError((error) => {
        console.log('Caught Error', error);
        return of('!!Replaced Error Value!!');
      })
    )
      .subscribe({
        next: (res) => console.log('Value Emitted: ', res),
        error: (err) => console.log('Error Occurred: ', err),
        complete: () => console.log('Stream Complete'),
      });
  }
}
