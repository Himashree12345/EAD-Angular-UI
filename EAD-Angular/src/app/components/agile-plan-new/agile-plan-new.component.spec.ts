import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilePlanNewComponent } from './agile-plan-new.component';

describe('AgilePlanNewComponent', () => {
  let component: AgilePlanNewComponent;
  let fixture: ComponentFixture<AgilePlanNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgilePlanNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgilePlanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
