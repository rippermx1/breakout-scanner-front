import { TestBed } from '@angular/core/testing';

import { VolumeScannerService } from './volume-scanner.service';

describe('VolumeScannerService', () => {
  let service: VolumeScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumeScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
