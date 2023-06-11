import { TestBed } from '@angular/core/testing';

import { ResgistroService } from './resgistro.service';

describe('ResgistroService', () => {
  let service: ResgistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResgistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
