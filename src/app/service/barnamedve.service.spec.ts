import { TestBed } from '@angular/core/testing';

import { BarnamedveService } from './barnamedve.service';

describe('BarnamedveService', () => {
  let service: BarnamedveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarnamedveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
