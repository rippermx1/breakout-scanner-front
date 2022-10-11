import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeAlertComponent } from './volume-alert.component';

describe('VolumeAlertComponent', () => {
  let component: VolumeAlertComponent;
  let fixture: ComponentFixture<VolumeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
