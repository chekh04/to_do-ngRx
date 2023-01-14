import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFiltersComponent } from './todo-filters.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { ListActionTypeEnum } from '../../../core/enums/list-action-type.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

describe('TodoFiltersComponent', () => {
  let component: TodoFiltersComponent;
  let fixture: ComponentFixture<TodoFiltersComponent>;
  let initialState: any = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFiltersComponent ],
      imports: [MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should open task dialog on edit ', () => {
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.addTask(ListActionTypeEnum.create);
    expect(spy).toHaveBeenCalled();
  });
});
