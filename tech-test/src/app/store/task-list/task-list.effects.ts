import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../index';
import {
  createTaskStart,
  createTaskSuccess,
  deleteTaskStart,
  deleteTaskSuccess, editTaskStart, editTaskSuccess,
  getTaskListStart,
  getTaskListSuccess
} from './task-list.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ClientService } from '../../client/client.service';
import { of } from 'rxjs';
import { TaskService } from '../../core/services/task/task.service';

@Injectable()

export class TaskListEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private taskService: TaskService,
              private clientService: ClientService) {
  }

  getTaskList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTaskListStart, deleteTaskSuccess, createTaskSuccess, editTaskSuccess),
      mergeMap(() => {
        return this.clientService.getTasksList()
          .pipe(
            map(tasks => getTaskListSuccess({tasks})),
            catchError(err => {
              console.log(err);
              return of(null);
            })
          );
      })
    );
  });
  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTaskStart),
      mergeMap(({id}) => {
        return this.clientService.deleteTask(id)
          .pipe(
            map(() => deleteTaskSuccess()),
            catchError(err => {
              console.log(err);
              return of(null);
            })
          );
      })
    );
  });
  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTaskStart),
      mergeMap(({task}) => {
        const newTask = this.taskService.createTask(task);
        return this.clientService.postNewTask(newTask)
          .pipe(
            map(() => createTaskSuccess()),
            catchError(err => {
              console.log(err);
              return of(null);
            })
          );
      })
    );
  });
  editTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editTaskStart),
      mergeMap(({task, id}) => {
        const newTask = this.taskService.createTask(task);
        return this.clientService.editTask(id, newTask)
          .pipe(
            map(() => editTaskSuccess()),
            catchError(err => {
              console.log(err);
              return of(null);
            })
          );
      })
    );
  });
}
