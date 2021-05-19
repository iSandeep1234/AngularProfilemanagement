import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierObjectiveComponent } from './carrier-objective.component';

describe('CarrierObjectiveComponent', () => {
  let component: CarrierObjectiveComponent;
  let fixture: ComponentFixture<CarrierObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
