import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FiltersState } from './filters.state';

export const TASK_LIST_FILTERS = 'filters';

export const getTaskListState = createFeatureSelector<FiltersState>(TASK_LIST_FILTERS);

export const filters = createSelector(getTaskListState, state => state);
export const tasksTypeToShow = createSelector(getTaskListState, state => state.taskType);
