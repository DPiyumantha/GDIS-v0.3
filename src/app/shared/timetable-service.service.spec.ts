import { TestBed } from '@angular/core/testing';

import { TimetableServiceService } from './timetable-service.service';

describe('TimetableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetableServiceService = TestBed.get(TimetableServiceService);
    expect(service).toBeTruthy();
  });
});
