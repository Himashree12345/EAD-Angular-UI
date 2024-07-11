import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectMappingComponent } from './user-project-mapping.component';

describe('UserProjectMappingComponent', () => {
  let component: UserProjectMappingComponent;
  let fixture: ComponentFixture<UserProjectMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProjectMappingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProjectMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
