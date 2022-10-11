import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotlevelComponent } from './pivotlevel.component';

describe('PivotlevelComponent', () => {
  let component: PivotlevelComponent;
  let fixture: ComponentFixture<PivotlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
