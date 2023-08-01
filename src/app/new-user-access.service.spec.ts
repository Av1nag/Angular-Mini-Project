import { TestBed } from '@angular/core/testing';

import { NewUserAccessService } from './new-user-access.service';

describe('NewUserAccessService', () => {
  let service: NewUserAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
