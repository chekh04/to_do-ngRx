import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterEnum } from '../../../core/enums/filter.enum';
import { FiltersState } from '../../../store/filter/filters.state';
import { Task } from '../../../core/models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoFiltersService {
  constructor() { }
  public filterData({category, taskType}: FiltersState, data: Task[] ): Task[] {
    let res = data;
    if (category) {
      res =  this.filterDataByCategory(category, data);
    }
    if (taskType === FilterEnum.active) {
      return res.filter((todo) => todo.done === false);
    } else if (taskType === FilterEnum.completed) {
      return res.filter((todo) => todo.done !== false);
    } else {
      return res;
    }
  }
  private filterDataByCategory(categoryId: string, data: Task[]): Task[] {
    return data.filter(el => el.category.id === categoryId);
  }
}
