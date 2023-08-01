import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndNavigationBarComponent } from './header-and-navigation-bar.component';

describe('HeaderAndNavigationBarComponent', () => {
  let component: HeaderAndNavigationBarComponent;
  let fixture: ComponentFixture<HeaderAndNavigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAndNavigationBarComponent]
    });
    fixture = TestBed.createComponent(HeaderAndNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
