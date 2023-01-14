import { NgModule } from '@angular/core';
import { TaskDialogComponent } from './task-dialog.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [TaskDialogComponent],
  imports: [
    ReactiveFormsModule,
    NgSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
  ]
})

export class TaskDialogModule {
}
