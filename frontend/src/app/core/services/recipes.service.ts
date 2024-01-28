import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private filterTitleSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('/recipes');
  }

  getFilterObservable(): Observable<string> {
    return this.filterTitleSubject.asObservable();
  }

  updateFilter(value: string): void {
    this.filterTitleSubject.next(value);
  }

  saveRecipe(formValue: any): Observable<any> {
    return this.http.post<any>('/recipes', formValue);
  }
}
