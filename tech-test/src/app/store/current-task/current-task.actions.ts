import { createAction, props } from '@ngrx/store';
import { Task } from '../../core/models/task';

const getCurrentStart = '[CURRENT TASK] Get  start';
const getCurrentFail = '[CURRENT TASK] Get  fail';
const getCurrentSuccess = '[CURRENT TASK] Get  success';
const clearCurrent = '[CURRENT TASK] Current task cleared';

export const getCurrentTaskStart = createAction(getCurrentStart, props<{id: number}>());
export const getCurrentTaskFail = createAction(getCurrentFail);
export const getCurrentTaskSuccess = createAction(getCurrentSuccess, props<{task: Task}>());

export const clearCurrentTask = createAction(clearCurrent);
