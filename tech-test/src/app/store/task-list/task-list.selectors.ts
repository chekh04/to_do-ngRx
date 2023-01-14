import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskListState } from './task-list.state';

export const TASK_LIST_STATE = 'task list';

export const getTaskListState = createFeatureSelector<TaskListState>(TASK_LIST_STATE);

export const taskList = createSelector(getTaskListState, state => state.tasks);
export const filteredList = createSelector(getTaskListState, state => state.filteredTasks);
export const searchText = createSelector(getTaskListState, state => state.searchText);

