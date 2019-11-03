import { TestBed } from '@angular/core/testing';

import { TimetablesService } from './timetables.service';

describe('TimetablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetablesService = TestBed.get(TimetablesService);
    expect(service).toBeTruthy();
  });
});
