import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeAtTimeComponent } from './volume-at-time.component';

describe('VolumeAtTimeComponent', () => {
  let component: VolumeAtTimeComponent;
  let fixture: ComponentFixture<VolumeAtTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeAtTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeAtTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
