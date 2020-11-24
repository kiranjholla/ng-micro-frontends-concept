import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundContainer } from './page-not-found.container';

describe('PageNotFoundContainer', () => {
  let component: PageNotFoundContainer;
  let fixture: ComponentFixture<PageNotFoundContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
