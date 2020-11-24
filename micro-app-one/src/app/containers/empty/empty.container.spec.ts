import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyContainer } from './empty.container';

describe('EmptyContainer', () => {
  let component: EmptyContainer;
  let fixture: ComponentFixture<EmptyContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
