import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUsersComponent } from './master-users.component';

describe('MasterUsersComponent', () => {
  let component: MasterUsersComponent;
  let fixture: ComponentFixture<MasterUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
