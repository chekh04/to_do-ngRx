import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentTaskState } from './current-task.state';

export const CURRENT_TASK_STATE = 'current task';

export const getTAskListState = createFeatureSelector<CurrentTaskState>(CURRENT_TASK_STATE);

export const currentTask = createSelector(getTAskListState, state => state.task);
