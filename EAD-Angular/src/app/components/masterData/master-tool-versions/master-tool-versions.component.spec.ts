import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterToolVersionsComponent } from './master-tool-versions.component';

describe('MasterToolVersionsComponent', () => {
  let component: MasterToolVersionsComponent;
  let fixture: ComponentFixture<MasterToolVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterToolVersionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterToolVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
