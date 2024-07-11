import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolProjectMappingComponent } from './tool-project-mapping.component';

describe('ToolProjectMappingComponent', () => {
  let component: ToolProjectMappingComponent;
  let fixture: ComponentFixture<ToolProjectMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolProjectMappingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolProjectMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
