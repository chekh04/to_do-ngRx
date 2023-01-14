import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Task } from 'src/app/core/models/task';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { filter, first, takeUntil } from 'rxjs/operators';
import { createTaskStart, deleteTaskStart, editTaskStart } from '../../../store/task-list/task-list.actions';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from '../../../core/services/task/task.service';
import { PartialTask } from '../../../core/models/partial-task';
import { ListActionTypeEnum } from '../../../core/enums/list-action-type.enum';
import { Subject } from 'rxjs';
import { clearCurrentTask, getCurrentTaskStart } from '../../../store/current-task/current-task.actions';
import { searchText } from '../../../store/task-list/task-list.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  public actionType: typeof ListActionTypeEnum;
  public displayedColumns: string[] = ['label', 'category', 'description', 'status', 'action'];
  public searchFilterText$ = this.store$.select(searchText);
  private modalIsDestroyed: Subject<void> = new Subject<void>();

  constructor(public dialog: MatDialog,
              private clientService: ClientService,
              private taskService: TaskService,
              private store$: Store<AppState>) {
    this.actionType = ListActionTypeEnum;
  }

  ngOnInit(): void {
  }

  public editTask(id: number, modalType: ListActionTypeEnum): void {
    this.store$.dispatch(getCurrentTaskStart({id}));
    this.dialog.open(TaskDialogComponent, {
      data: {modalType}
    }).afterClosed()
      .pipe(takeUntil(this.modalIsDestroyed))
      .subscribe((task: PartialTask) => {
        if (task) {
          this.store$.dispatch(editTaskStart({task, id}));
        }
        this.store$.dispatch(clearCurrentTask());
        this.modalIsDestroyed.next();
      });
  }

  public deleteTask(id: number): void {
    this.dialog.open(ConfirmDialogComponent)
      .afterClosed()
      .pipe(filter(data => !!data), takeUntil(this.modalIsDestroyed))
      .subscribe(() => {
        this.store$.dispatch(deleteTaskStart({id}));
        this.modalIsDestroyed.next();
      });
  }
}
