import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { TaskListModule } from './components/task-list/task-list.module';
import { TodoFiltersModule } from './components/todo-filters/todo-filters.module';



@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    TaskListModule,
    TodoFiltersModule,
  ]
})
export class ClientModule { }
