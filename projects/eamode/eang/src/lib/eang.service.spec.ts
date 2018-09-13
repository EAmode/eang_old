import { TestBed } from '@angular/core/testing';

import { EangService } from './eang.service';

describe('EangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EangService = TestBed.get(EangService);
    expect(service).toBeTruthy();
  });
});
