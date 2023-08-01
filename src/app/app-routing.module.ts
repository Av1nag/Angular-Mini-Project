import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Title } from '@angular/platform-browser';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { pageGuardingGuard } from './page-guarding.guard';
import { MainUsersDataComponent } from './main-users-data/main-users-data.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserInfoTableComponent } from './user-info-table/user-info-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full',
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
    title: 'Angular login page',
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    title: 'Angular Home page',
    canActivate: [pageGuardingGuard],
  },

  {
    path: 'main-users-data',
    component: MainUsersDataComponent,
    title: 'Users Data',
    canActivate: [pageGuardingGuard],
    children: [
      {
        path: 'users-list',
        component: UsersListComponent,
        title: 'Users',
        canActivate: [pageGuardingGuard],
      },
      {
        path: 'users-list-table',
        component: UsersTableComponent,
        title: 'Users list table',
        canActivate: [pageGuardingGuard],
      },
    ],
  },
  {
    path: 'user-info/:id',
    component: UserInfoComponent,
    title: 'User Info',
    canActivate: [pageGuardingGuard],
  },
  {
    path: 'user-info-table/:id',
    component: UserInfoTableComponent,
    title: 'User Info of table',
    canActivate: [pageGuardingGuard],
  },


  {
    path: 'add-new-user',
    component: AddNewUserComponent,
    title: 'Add New user data',
    canActivate: [pageGuardingGuard],
  },

  {
    path: '**',
    component: PageErrorComponent,
    title: 'page-404-error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
