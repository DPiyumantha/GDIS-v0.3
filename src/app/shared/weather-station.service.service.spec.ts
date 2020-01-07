import { TestBed } from '@angular/core/testing';

import { WeatherStation.ServiceService } from './weather-station.service.service';

describe('WeatherStation.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherStation.ServiceService = TestBed.get(WeatherStation.ServiceService);
    expect(service).toBeTruthy();
  });
});
