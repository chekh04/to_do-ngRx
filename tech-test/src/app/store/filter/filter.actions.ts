import { createAction, props } from '@ngrx/store';
import { FilterEnum } from '../../core/enums/filter.enum';

const taskTypeFilter = '[FILTER] Update task type';
const taskTypeFilterSuccess = '[FILTER] Update task type success';
const categoryFilter = '[FILTER] Update category';

export const updateTaskTypeFilter = createAction(taskTypeFilter, props<{taskType: FilterEnum}>());
// export const updateTaskTypeFilter = createAction(taskTypeFilter, props<{taskType: FilterEnum}>());
export const updateCategoryFilter = createAction(categoryFilter, props<{category: string}>());
