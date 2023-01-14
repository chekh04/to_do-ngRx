import { Task } from '../../core/models/task';

export interface TaskListState {
  tasks: Task[];
  filteredTasks: Task[];
  searchText: string;
}

export const initialTaskListState: TaskListState = {
  tasks: [],
  filteredTasks: [],
  searchText: null
};
