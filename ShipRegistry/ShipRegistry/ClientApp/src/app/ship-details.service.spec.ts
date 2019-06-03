import { TestBed } from '@angular/core/testing';

import { ShipDetailsService } from './ship-details.service';

describe('ShipDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipDetailsService = TestBed.get(ShipDetailsService);
    expect(service).toBeTruthy();
  });
});
