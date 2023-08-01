import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsersDataComponent } from './main-users-data.component';

describe('MainUsersDataComponent', () => {
  let component: MainUsersDataComponent;
  let fixture: ComponentFixture<MainUsersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainUsersDataComponent]
    });
    fixture = TestBed.createComponent(MainUsersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
