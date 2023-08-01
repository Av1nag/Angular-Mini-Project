import { Component, inject } from '@angular/core';
import { UserInfoAccessService } from '../user-info-access.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  constructor(
    private usersInfoFromService: UserInfoAccessService,
    private usersInfoRouting: Router
  ) {}
  infoDisplayVariable: any;
  showSpinner = true;
  pageIndex = 0;
  pageSize = 15;
  totalItems = 5000;
  pageSizeOptions: number[] = [5, 10, 15, 25, 50];

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    const startIndex = this.pageIndex * this.pageSize;
    this.usersInfoFromService
      .usersInfo(startIndex, this.pageSize)
      .subscribe((data: any) => {
        this.infoDisplayVariable = data;
        this.showSpinner = false;
      });
  }

  redirectToUserInfo(id: any) {
    this.usersInfoRouting.navigate(['/user-info', id]);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    // Fetch data for the current page based on the updated pageIndex and pageSize
    this.fetchData();
  }
}
