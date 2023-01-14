import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClientService } from '../../client/client.service';
import { getCurrentTaskFail, getCurrentTaskStart, getCurrentTaskSuccess } from './current-task.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class CurrentTaskEffects {
  constructor(private actions$: Actions,
              private clientService: ClientService) {
  }
  getCurrentTask = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentTaskStart),
      mergeMap(({id}) =>
        this.clientService.getTaskById(id)
          .pipe(
            map(task => getCurrentTaskSuccess({task})),
            catchError(err => {
              return of(getCurrentTaskFail());
            })
          )
      )
    );
  });
}
