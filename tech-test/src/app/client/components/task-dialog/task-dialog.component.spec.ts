import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDialogComponent } from './task-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

describe('AddTaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;
  let initialState: any = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDialogComponent ],
      imports: [CommonModule, MatDialogModule, ReactiveFormsModule, NgSelectModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create controls', () => {
    expect(component.form.contains('label')).toBeTruthy();
    expect(component.form.contains('description')).toBeTruthy();
    expect(component.form.contains('category')).toBeTruthy();
    expect(component.form.contains('done')).toBeTruthy();
  });
});
