import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pageGuardingGuard } from './page-guarding.guard';

describe('pageGuardingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pageGuardingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
