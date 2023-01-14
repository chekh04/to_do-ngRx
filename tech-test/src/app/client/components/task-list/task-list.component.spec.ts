import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipeModule } from '../../../core/pipes/search-filter/search-filter-pipe.module';
import { ListActionTypeEnum } from '../../../core/enums/list-action-type.enum';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let initialState: any = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      imports: [
        CommonModule,
        MatDialogModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SearchFilterPipeModule],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should open confirm dialog on delete', () => {
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.deleteTask(3);
    expect(spy).toHaveBeenCalled();
    component.dialog.closeAll();
  });
  xit('should open task dialog on edit ', () => {
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.editTask(3, ListActionTypeEnum.edit);
    expect(spy).toHaveBeenCalled();
  });
});
