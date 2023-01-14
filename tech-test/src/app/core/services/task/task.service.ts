import { Injectable } from '@angular/core';
import { CategoriesService } from '../category/categories.service';
import { Task } from '../../models/task';
import { PartialTask } from '../../models/partial-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private categoryService: CategoriesService ) { }
  public createTask(task: PartialTask): Partial<Task> {
    return {
      ...task,
      category: this.categoryService.findCategoryById(task.category),
      done: !!task.done ? new Date() : false
    };
  }
}
