import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Observable } from 'rxjs';
import { Task } from '../core/models/task';
import { filteredList } from '../store/task-list/task-list.selectors';
import { getTaskListStart } from '../store/task-list/task-list.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.store$.select(filteredList);

  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(getTaskListStart());
  }

}
