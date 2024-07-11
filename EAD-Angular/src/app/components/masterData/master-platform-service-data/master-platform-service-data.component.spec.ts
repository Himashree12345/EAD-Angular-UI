import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPlatformServiceDataComponent } from './master-platform-service-data.component';

describe('MasterPlatformServiceDataComponent', () => {
  let component: MasterPlatformServiceDataComponent;
  let fixture: ComponentFixture<MasterPlatformServiceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterPlatformServiceDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterPlatformServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
