import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../../models/category';


const AVAILABLE_CATEGORIES: Category[] = [
  {name: 'Work', id: 'vgshkjfhdb2323d'},
  {name: 'Life', id: 'vgshkjfhdb2334f'},
  {name: 'Sport', id: 'vgshkjfhdb2322t'},
  {name: 'Finance', id: 'vgshkjfhdb237a'},
  {name: 'House', id: 'vgshkjfhdb23003g'},
];

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesSource: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(AVAILABLE_CATEGORIES);

  constructor() { }
  get categories$(): Observable<Category[]> {
    return this.categoriesSource.asObservable();
  }
  public findCategoryById(id: string): Category {
    return this.categoriesSource.value.find(el => el.id === id);
  }
}
