import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersCornerComponent } from './farmers-corner.component';

describe('FarmersCornerComponent', () => {
  let component: FarmersCornerComponent;
  let fixture: ComponentFixture<FarmersCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmersCornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmersCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
