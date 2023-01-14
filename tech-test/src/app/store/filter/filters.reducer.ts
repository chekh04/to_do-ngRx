import { createReducer, on } from '@ngrx/store';
import { initialFiltersState } from './filters.state';
import { updateCategoryFilter, updateTaskTypeFilter } from './filter.actions';

export const filtersReducer = createReducer(
  initialFiltersState,
  on(updateTaskTypeFilter, (state, {taskType}) => ({
    ...state,
    taskType
  })),
  on(updateCategoryFilter, (state, {category}) => ({
    ...state,
    category
  }))
);
