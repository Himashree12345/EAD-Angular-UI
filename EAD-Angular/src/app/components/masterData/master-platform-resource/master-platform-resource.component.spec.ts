import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPlatformResourceComponent } from './master-platform-resource.component';

describe('MasterPlatformResourceComponent', () => {
  let component: MasterPlatformResourceComponent;
  let fixture: ComponentFixture<MasterPlatformResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterPlatformResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterPlatformResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
