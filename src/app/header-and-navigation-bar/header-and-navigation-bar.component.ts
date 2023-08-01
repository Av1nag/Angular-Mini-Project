import { Component, inject } from '@angular/core';
import { LoginAccessService } from '../login-access.service';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header-and-navigation-bar',
  templateUrl: './header-and-navigation-bar.component.html',
  styleUrls: ['./header-and-navigation-bar.component.css'],
})
export class HeaderAndNavigationBarComponent {
  userLoggedIn = false;
  // userTheme: ThemePalette = 'theme1'; // Define the newTheme variable and assign a default value

  constructor(
    private serviceInjection: LoginAccessService,
    private pageNavigation: Router,

  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'yes') {
      this.userLoggedIn = true;
    } else {
      this.pageNavigation.navigate(['/login-page']);
      this.serviceInjection.loggedIn.subscribe((data) => {
        this.userLoggedIn = data;
      });
    }
  }

  logout() {
    localStorage.clear();
    this.pageNavigation.navigate(['/login-page']);
    this.serviceInjection.loggedIn.next(false);

  }
}




