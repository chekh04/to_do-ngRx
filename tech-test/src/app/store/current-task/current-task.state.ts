import { Task } from '../../core/models/task';

export interface CurrentTaskState {
  task: Task;
}

export const initialCurrentTaskState = {
  task: null
};
