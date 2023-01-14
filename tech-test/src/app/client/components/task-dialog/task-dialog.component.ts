import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../core/services/category/categories.service';
import { Task } from '../../../core/models/task';
import { ListActionTypeEnum } from '../../../core/enums/list-action-type.enum';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { currentTask } from '../../../store/current-task/current-task.selectors';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public categories$ = this.categoriesService.categories$;
  public modalType: typeof ListActionTypeEnum;
  public isEditModal: boolean;
  private isComponentDestroyed: Subject<void> = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { modalType: ListActionTypeEnum },
    private matDialogRef: MatDialogRef<TaskDialogComponent>,
    private categoriesService: CategoriesService,
    private store$: Store<AppState>,
    private fb: FormBuilder) {
    this.modalType = ListActionTypeEnum;
    this.form = this.getFormGroup();
    this.isEditModal = this.data.modalType === this.modalType.edit;
  }

  ngOnInit(): void {
    this.store$.select(currentTask)
      .pipe(filter(data => !!data), takeUntil(this.isComponentDestroyed))
      .subscribe((task: Task) => {
        const {label, description, category, done} = task;
        this.form.patchValue({
          label,
          description,
          category: category.id,
          done
        });
      });
  }

  public submitForm(): void {
    this.form.invalid ? this.closeModal() : this.closeModal(this.form.value);
  }

  public closeModal(data: { [key: string]: string } | false = false) {
    this.matDialogRef.close(data);
  }

  private getFormGroup(): FormGroup {
    return this.fb.group({
      label: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      done: [false],
    });
  }
  ngOnDestroy() {
    this.isComponentDestroyed.next();
  }
}
