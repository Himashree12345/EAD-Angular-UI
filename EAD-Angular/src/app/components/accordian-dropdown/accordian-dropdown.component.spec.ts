import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianDropdownComponent } from './accordian-dropdown.component';

describe('AccordianDropdownComponent', () => {
  let component: AccordianDropdownComponent;
  let fixture: ComponentFixture<AccordianDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordianDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordianDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
