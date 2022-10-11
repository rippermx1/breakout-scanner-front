import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLevelTableComponent } from './price-level-table.component';

describe('PriceLevelTableComponent', () => {
  let component: PriceLevelTableComponent;
  let fixture: ComponentFixture<PriceLevelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceLevelTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLevelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
