import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProjectComponent } from './master-project.component';

describe('MasterProjectComponent', () => {
  let component: MasterProjectComponent;
  let fixture: ComponentFixture<MasterProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
