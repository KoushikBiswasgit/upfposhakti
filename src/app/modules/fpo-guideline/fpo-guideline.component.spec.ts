import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpoGuidelineComponent } from './fpo-guideline.component';

describe('FpoGuidelineComponent', () => {
  let component: FpoGuidelineComponent;
  let fixture: ComponentFixture<FpoGuidelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpoGuidelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpoGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
