import { TestBed } from '@angular/core/testing';

import { PivotlevelService } from './pivotlevel.service';

describe('PivotlevelService', () => {
  let service: PivotlevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PivotlevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
