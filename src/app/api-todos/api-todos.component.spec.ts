import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTodosComponent } from './api-todos.component';

describe('ApiTodosComponent', () => {
  let component: ApiTodosComponent;
  let fixture: ComponentFixture<ApiTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
