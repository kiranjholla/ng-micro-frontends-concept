import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalKingdomContainer } from './animal-kingdom.container';

describe('AnimalKingdomContainer', () => {
  let component: AnimalKingdomContainer;
  let fixture: ComponentFixture<AnimalKingdomContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalKingdomContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalKingdomContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
