import { TestBed } from '@angular/core/testing';

import { FetchallService } from './fetchall.service';

describe('FetchallService', () => {
  let service: FetchallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
