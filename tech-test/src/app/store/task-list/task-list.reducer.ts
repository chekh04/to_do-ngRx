import { createReducer, on } from '@ngrx/store';
import { initialTaskListState } from './task-list.state';
import { getTaskListSuccess, updateFilteredTasks, updateSearchText } from './task-list.actions';

export const taskListReducer = createReducer(
  initialTaskListState,
  on(getTaskListSuccess, (state, {tasks}) => ({
    ...state,
    tasks,
    filteredTasks: tasks
  })),
  on(updateFilteredTasks, (state, {filteredTasks}) => ({
    ...state,
    filteredTasks
  })),
  on(updateSearchText, (state, {searchText}) => ({
    ...state,
    searchText
  }))
);
