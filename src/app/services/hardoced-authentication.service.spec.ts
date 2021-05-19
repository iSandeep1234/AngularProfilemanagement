import { TestBed } from '@angular/core/testing';

import { HardocedAuthenticationService } from './hardoced-authentication.service';

describe('HardocedAuthenticationService', () => {
  let service: HardocedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardocedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
