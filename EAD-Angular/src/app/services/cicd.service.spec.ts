import { TestBed } from '@angular/core/testing';

import { CicdService } from './cicd.service';

describe('CicdService', () => {
  let service: CicdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
