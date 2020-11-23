import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorContainer } from './error.container';

describe('ErrorContainer', () => {
  let component: ErrorContainer;
  let fixture: ComponentFixture<ErrorContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
