import { TestBed } from '@angular/core/testing';

import { UserInfoAccessService } from './user-info-access.service';

describe('UserInfoAccessService', () => {
  let service: UserInfoAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
