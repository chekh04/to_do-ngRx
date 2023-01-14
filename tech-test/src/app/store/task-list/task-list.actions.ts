import { createAction, props } from '@ngrx/store';
import { Task } from '../../core/models/task';
import { PartialTask } from '../../core/models/partial-task';


const getStart = '[TASK LIST] Get start';
const getFail = '[TASK LIST] Get failure';
const getSuccess = '[TASK LIST] Get success';

export const getTaskListStart = createAction(getStart);
export const getTaskListFail = createAction(getFail);
export const getTaskListSuccess = createAction(getSuccess, props<{tasks: Task[]}>());

const deleteStart = '[TASK LIST] Delete start';
const deleteFail = '[TASK LIST] Delete fail';
const deleteSuccess = '[TASK LIST] Delete success';

export const deleteTaskStart = createAction(deleteStart, props<{id: number}>());
export const deleteTaskFail = createAction(deleteFail);
export const deleteTaskSuccess = createAction(deleteSuccess);

const createStart = '[TASK LIST] Create start';
const createFail = '[TASK LIST] Create fail';
const createSuccess = '[TASK LIST] Create success';

export const createTaskStart = createAction(createStart, props<{task: PartialTask}>());
export const createTaskFail = createAction(createFail);
export const createTaskSuccess = createAction(createSuccess);

const editStart = '[TASK LIST] Edit start';
const editFail = '[TASK LIST] Edit fail';
const editSuccess = '[TASK LIST] Edit success';

export const editTaskStart = createAction(editStart, props<{task: PartialTask, id: number}>());
export const editTaskFail = createAction(editFail);
export const editTaskSuccess = createAction(editSuccess);

export const updateFilteredTasks = createAction('[TASK LIST] Update filtered tasks', props<{filteredTasks: Task[]}>());
export const updateSearchText = createAction('[TASK LIST] Update search text', props<{searchText: string}>());
