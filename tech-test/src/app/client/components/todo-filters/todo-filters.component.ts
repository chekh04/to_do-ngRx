import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListActionTypeEnum } from '../../../core/enums/list-action-type.enum';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { filter, takeUntil } from 'rxjs/operators';
import { PartialTask } from '../../../core/models/partial-task';
import { createTaskStart, updateSearchText } from '../../../store/task-list/task-list.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { Observable, Subject } from 'rxjs';
import { FilterEnum } from '../../../core/enums/filter.enum';
import { TodoFiltersService } from './todo-filters.service';
import { updateCategoryFilter, updateTaskTypeFilter } from '../../../store/filter/filter.actions';
import { tasksTypeToShow } from '../../../store/filter/filter.selectors';
import { CategoriesService } from '../../../core/services/category/categories.service';
import { Category } from '../../../core/models/category';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {
  public actionType: typeof ListActionTypeEnum;
  public categories$ = this.categoriesService.categories$;
  public filter$: Observable<FilterEnum>;
  public filterEnum = FilterEnum;
  private modalIsDestroyed: Subject<void> = new Subject<void>();

  constructor(public dialog: MatDialog,
              private filterService: TodoFiltersService,
              private categoriesService: CategoriesService,
              private store$: Store<AppState>) {
    this.actionType = ListActionTypeEnum;
    this.filter$ = this.store$.select(tasksTypeToShow);
  }

  ngOnInit(): void {
  }
  public addTask(modalType: ListActionTypeEnum) {
    this.dialog.open(TaskDialogComponent, {data: {modalType}})
      .afterClosed()
      .pipe(filter(data => !!data, takeUntil(this.modalIsDestroyed)))
      .subscribe((task: PartialTask) => {
        this.store$.dispatch(createTaskStart({task}));
        this.modalIsDestroyed.next();
      });
  }

  changeFilter(taskType: FilterEnum) {
    this.store$.dispatch(updateTaskTypeFilter({taskType}));
  }

  updateCategoryFilter(category: Category) {
      this.store$.dispatch(updateCategoryFilter({category: category ? category.id : null}));
  }

  applyFilter(e: KeyboardEvent) {
    const searchText = (e.target as HTMLInputElement).value;
    this.store$.dispatch(updateSearchText({searchText}));
  }
}
