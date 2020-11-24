import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelUniverseContainer } from './marvel-universe.container';

describe('MarvelUniverseContainer', () => {
  let component: MarvelUniverseContainer;
  let fixture: ComponentFixture<MarvelUniverseContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelUniverseContainer]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelUniverseContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
