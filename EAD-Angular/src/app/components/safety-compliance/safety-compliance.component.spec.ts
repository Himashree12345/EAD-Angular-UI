import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyComplianceComponent } from './safety-compliance.component';

describe('SafetyComplianceComponent', () => {
  let component: SafetyComplianceComponent;
  let fixture: ComponentFixture<SafetyComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyComplianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
