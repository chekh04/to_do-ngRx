import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EffectsModule } from '@ngrx/effects';
import { TaskListEffects } from '../../../store/task-list/task-list.effects';
import { CurrentTaskEffects } from '../../../store/current-task/current-task.effects';
import { FilterEffects } from '../../../store/filter/filter.effects';
import { SearchFilterPipeModule } from '../../../core/pipes/search-filter/search-filter-pipe.module';



@NgModule({
  declarations: [TaskListComponent],
  exports: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatCheckboxModule,
    SearchFilterPipeModule,
    EffectsModule.forFeature([TaskListEffects, CurrentTaskEffects, FilterEffects])
  ]
})
export class TaskListModule { }
