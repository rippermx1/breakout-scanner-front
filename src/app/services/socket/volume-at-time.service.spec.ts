import { TestBed } from '@angular/core/testing';

import { VolumeAtTimeService } from './volume-at-time.service';

describe('VolumeAtTimeService', () => {
  let service: VolumeAtTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumeAtTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
