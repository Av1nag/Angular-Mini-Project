import { Component, inject } from '@angular/core';
import { UserInfoAccessService } from '../user-info-access.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  serviceInjection = inject(UserInfoAccessService);
  activatedRoutesInjection = inject(ActivatedRoute);
  dataCollector: any;
  _navigation=inject(Router)

  ngOnInit(): void {
    const userId = this.activatedRoutesInjection.snapshot.paramMap.get('id');
    this.serviceInjection.singleUserInfo(userId).subscribe((data: any) => {
      this.dataCollector = data;
    });

  }
  navigatePrevoiusPage(){
    this._navigation.navigate(['/main-users-data/users-list'])

  }
}

