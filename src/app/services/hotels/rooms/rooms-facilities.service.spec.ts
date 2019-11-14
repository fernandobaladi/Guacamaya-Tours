import { TestBed } from '@angular/core/testing';

import { RoomsFacilitiesService } from './rooms-facilities.service';

describe('RoomsFacilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsFacilitiesService = TestBed.get(RoomsFacilitiesService);
    expect(service).toBeTruthy();
  });
});
