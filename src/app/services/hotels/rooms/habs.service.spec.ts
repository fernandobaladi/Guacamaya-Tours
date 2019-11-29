import { TestBed } from '@angular/core/testing';

import { HabsService } from './habs.service';

describe('HabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabsService = TestBed.get(HabsService);
    expect(service).toBeTruthy();
  });
});
