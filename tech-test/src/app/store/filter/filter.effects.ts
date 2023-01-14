import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../index';
import { updateCategoryFilter, updateTaskTypeFilter } from './filter.actions';
import { map, mergeMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { filters } from './filter.selectors';
import { taskList } from '../task-list/task-list.selectors';
import { TodoFiltersService } from '../../client/components/todo-filters/todo-filters.service';
import { FiltersState } from './filters.state';
import { Task } from '../../core/models/task';
import { updateFilteredTasks } from '../task-list/task-list.actions';

@Injectable()

export class FilterEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private filterService: TodoFiltersService) {
  }
  updateTaskType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTaskTypeFilter, updateCategoryFilter),
      mergeMap(() => {
        return combineLatest([this.store$.select(filters), this.store$.select(taskList)])
          .pipe(
            // tslint:disable-next-line:no-shadowed-variable
            map(([filters, taskList]: [FiltersState, Task[]]) => {
              const filteredTasks = this.filterService.filterData(filters, taskList);
              return updateFilteredTasks({filteredTasks});
            })
          );
      })
    );
  });
}
