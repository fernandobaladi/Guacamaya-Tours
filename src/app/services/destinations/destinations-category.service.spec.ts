import { TestBed } from '@angular/core/testing';

import { DestinationsCategoryService } from './destinations-category.service';

describe('DestinationsCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinationsCategoryService = TestBed.get(DestinationsCategoryService);
    expect(service).toBeTruthy();
  });
});
