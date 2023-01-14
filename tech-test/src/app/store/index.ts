import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { taskListReducer } from './task-list/task-list.reducer';
import { TaskListState } from './task-list/task-list.state';
import { TASK_LIST_STATE } from './task-list/task-list.selectors';
import { CURRENT_TASK_STATE } from './current-task/current-task.selectors';
import { CurrentTaskState } from './current-task/current-task.state';
import { currentTaskReducer } from './current-task/current-task.reducer';
import { TASK_LIST_FILTERS } from './filter/filter.selectors';
import { FiltersState } from './filter/filters.state';
import { filtersReducer } from './filter/filters.reducer';


export interface AppState {
  [TASK_LIST_STATE]: TaskListState;
  [CURRENT_TASK_STATE]: CurrentTaskState;
  [TASK_LIST_FILTERS]: FiltersState;
}

export const reducers: ActionReducerMap<AppState> = {
  [TASK_LIST_STATE]: taskListReducer,
  [CURRENT_TASK_STATE]: currentTaskReducer,
  [TASK_LIST_FILTERS]: filtersReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
