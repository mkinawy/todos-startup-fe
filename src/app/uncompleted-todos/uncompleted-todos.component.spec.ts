import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompletedTodosComponent } from './uncompleted-todos.component';

describe('UncompletedTodosComponent', () => {
  let component: UncompletedTodosComponent;
  let fixture: ComponentFixture<UncompletedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncompletedTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompletedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
