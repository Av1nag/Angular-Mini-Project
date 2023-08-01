import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoTableComponent } from './user-info-table.component';

describe('UserInfoTableComponent', () => {
  let component: UserInfoTableComponent;
  let fixture: ComponentFixture<UserInfoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoTableComponent]
    });
    fixture = TestBed.createComponent(UserInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
