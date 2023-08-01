import { Component, inject } from '@angular/core';
import { UserInfoAccessService } from '../user-info-access.service';
import { ROUTES, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  constructor(
    private serviceInjection: UserInfoAccessService,
    private usersInfoRouting: Router
  ) {}
  usersTableDisplay: any;
  displayedColumns: string[] = ['id', 'title', 'body'];
  pageIndex = 0;
  pageSize = 15;
  totalItems = 100;
  pageSizeOptions: number[] = [5, 10, 15, 25, 50];
  showSpinner=true;
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    const startIndex = this.pageIndex * this.pageSize;
    this.serviceInjection.usersInfoTable(startIndex, this.pageSize)
      .subscribe((data: any) => {
        this.usersTableDisplay = data;
        this.showSpinner = false;
      });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    // Fetch data for the current page based on the updated pageIndex and pageSize
    this.fetchData();
  }

  openUserInfo(id:any) {
    this.usersInfoRouting.navigate(['/user-info-table', id])

  }
}
