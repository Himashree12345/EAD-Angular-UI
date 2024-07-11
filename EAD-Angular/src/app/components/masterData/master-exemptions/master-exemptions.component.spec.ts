import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterExemptionsComponent } from './master-exemptions.component';

describe('MasterExemptionsComponent', () => {
  let component: MasterExemptionsComponent;
  let fixture: ComponentFixture<MasterExemptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterExemptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterExemptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
