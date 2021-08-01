import { TestBed } from '@angular/core/testing';

import { PastLaunchesService } from './past-launches.service';

describe('PastLaunchesService', () => {
  let service: PastLaunchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastLaunchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
