import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderAndNavigationBarComponent } from './header-and-navigation-bar/header-and-navigation-bar.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserInfoTableComponent } from './user-info-table/user-info-table.component';
import { MainUsersDataComponent } from './main-users-data/main-users-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderAndNavigationBarComponent,
    PageErrorComponent,
    UsersListComponent,
    UserInfoComponent,
    AddNewUserComponent,
    UsersTableComponent,
    UserInfoTableComponent,
    MainUsersDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
