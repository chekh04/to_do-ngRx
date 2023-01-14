import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFiltersComponent } from './todo-filters.component';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [TodoFiltersComponent],
  exports: [
    TodoFiltersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TodoFiltersModule { }
