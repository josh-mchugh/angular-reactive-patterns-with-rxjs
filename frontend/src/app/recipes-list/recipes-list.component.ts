import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class RecipesListComponent implements OnInit{
  recipes!: Recipe[];

  constructor(private service: RecipesService) { }

  ngOnInit(): void {
    this.service.getRecipes().subscribe(result => {
      this.recipes = result;
    });
  }
}
