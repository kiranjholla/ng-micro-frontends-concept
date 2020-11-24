import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantKingdomContainer } from './plant-kingdom.container';

describe('PlantKingdomContainer', () => {
  let component: PlantKingdomContainer;
  let fixture: ComponentFixture<PlantKingdomContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantKingdomContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantKingdomContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
