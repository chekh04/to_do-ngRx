import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Task } from '../core/models/task';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;
  const SERVER_URL = 'http://localhost:3000/tasks';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClientService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts: Task[] = [
      {
        id: 2,
        label: 'Taxes',
        description: 'Start doing my taxes and contact my accountant jhon for advice',
        category: {
          name: 'Finance',
          id: 'vgshkjfhdb237a'
        },
        done: false
      },
      {
        id: 3,
        label: 'Unnecessary bill',
        description: 'Find reason af unnecessary bill from bank',
        category: {
          name: 'Finance',
          id: 'vgshkjfhdb237a'
        },
        done: false
      }];
    service.getTasksList().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });
    const request = httpMock.expectOne( `${SERVER_URL}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });
});
