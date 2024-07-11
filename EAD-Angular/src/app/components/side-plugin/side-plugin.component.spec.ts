import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePluginComponent } from './side-plugin.component';

describe('SidePluginComponent', () => {
  let component: SidePluginComponent;
  let fixture: ComponentFixture<SidePluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidePluginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
