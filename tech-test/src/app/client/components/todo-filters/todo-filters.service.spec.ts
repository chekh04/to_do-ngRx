import { TestBed } from '@angular/core/testing';

import { TodoFiltersService } from './todo-filters.service';

describe('TodoFiltersService', () => {
  let service: TodoFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
