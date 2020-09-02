import { TestBed } from '@angular/core/testing';

import { QuizyService } from './quizy.service';

describe('QuizyService', () => {
  let service: QuizyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
