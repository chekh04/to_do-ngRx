import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../core/models/task';
import { HttpClient } from '@angular/common/http';
import { filter, first } from 'rxjs/operators';

const SERVER_URL = 'http://localhost:3000/tasks';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  public getTasksList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${SERVER_URL}`);
  }
  public getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${SERVER_URL}/${id}`);
  }
  public postNewTask(task: Partial<Task>): Observable<any> {
    return this.httpClient.post(`${SERVER_URL}`, task);
  }
  public deleteTask(id: number): Observable<any> {
    return this.httpClient.delete(`${SERVER_URL}/${id}`);
  }
  public editTask(id: number, task: Partial<Task>): Observable<any> {
    return this.httpClient.patch(`${SERVER_URL}/${id}`, {...task, id});
  }

}
