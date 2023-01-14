import { createReducer, on } from '@ngrx/store';
import { initialCurrentTaskState } from './current-task.state';
import { clearCurrentTask, getCurrentTaskSuccess } from './current-task.actions';

export const currentTaskReducer = createReducer(
  initialCurrentTaskState,
  on(getCurrentTaskSuccess, (state, {task}) => ({
    ...state,
    task
  })),
  on(clearCurrentTask, state => ({
    ...state,
    task: null
  })),
);
