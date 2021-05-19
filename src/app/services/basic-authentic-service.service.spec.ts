import { TestBed } from '@angular/core/testing';

import { BasicAuthenticServiceService } from './basic-authentic-service.service';

describe('BasicAuthenticServiceService', () => {
  let service: BasicAuthenticServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
