import { TestBed } from '@angular/core/testing';

import { BonificiacionService } from './bonificiacion.service';

describe('BonificiacionService', () => {
  let service: BonificiacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonificiacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
