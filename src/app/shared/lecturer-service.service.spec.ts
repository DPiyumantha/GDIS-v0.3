import { TestBed } from '@angular/core/testing';

import { LecturerServiceService } from './lecturer-service.service';

describe('LecturerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturerServiceService = TestBed.get(LecturerServiceService);
    expect(service).toBeTruthy();
  });
});
