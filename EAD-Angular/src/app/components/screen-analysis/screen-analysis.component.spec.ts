import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAnalysisComponent } from './screen-analysis.component';

describe('ScreenAnalysisComponent', () => {
  let component: ScreenAnalysisComponent;
  let fixture: ComponentFixture<ScreenAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
