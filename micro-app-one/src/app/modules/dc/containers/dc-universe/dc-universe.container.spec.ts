import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcUniverseContainer } from './dc-universe.container';

describe('DcUniverseContainer', () => {
  let component: DcUniverseContainer;
  let fixture: ComponentFixture<DcUniverseContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DcUniverseContainer]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcUniverseContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
