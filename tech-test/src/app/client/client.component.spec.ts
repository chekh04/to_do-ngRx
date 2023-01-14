import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getTaskListStart } from '../store/task-list/task-list.actions';
import { AppState } from '../store';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let store$: MockStore<AppState>;
  let initialState: any = {};
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should dispatch action getTaskListStart in OnInit', () => {
    const dispatchSpy = spyOn(store$, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(getTaskListStart());
  });
});
