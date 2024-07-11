import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilePlanComponent } from './agile-plan.component';

describe('AgilePlanComponent', () => {
  let component: AgilePlanComponent;
  let fixture: ComponentFixture<AgilePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgilePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgilePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
