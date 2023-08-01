import { TestBed } from '@angular/core/testing';

import { LoginAccessService } from './login-access.service';

describe('LoginAccessService', () => {
  let service: LoginAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
