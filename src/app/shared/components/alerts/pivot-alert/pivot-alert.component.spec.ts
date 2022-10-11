import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotAlertComponent } from './pivot-alert.component';

describe('PivotAlertComponent', () => {
  let component: PivotAlertComponent;
  let fixture: ComponentFixture<PivotAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
