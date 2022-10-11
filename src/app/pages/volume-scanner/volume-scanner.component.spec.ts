import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeScannerComponent } from './volume-scanner.component';

describe('VolumeScannerComponent', () => {
  let component: VolumeScannerComponent;
  let fixture: ComponentFixture<VolumeScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
