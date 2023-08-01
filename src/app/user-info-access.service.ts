import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserInfoAccessService {
  constructor(private httpClientInjection: HttpClient) {}
  // startIndex=1
  // pageSize=10
  // httpClientInjection = inject(HttpClient);
  usersInfoApi = environment.dataApi;
  usersTable= environment.dataTableApi;
  usersInfo(startIndex:any, pageSize: any) {
    return this.httpClientInjection.get(`${this.usersInfoApi}?_start=${startIndex}&_limit=${pageSize}`);
  }

  singleUserInfo(id:any){
    return this.httpClientInjection.get(this.usersInfoApi+`/${id}`);
  }

  usersInfoTable(startIndex:any, pageSize: any) {
    return this.httpClientInjection.get(`${this.usersTable}?_start=${startIndex}&_limit=${pageSize}`);
  }
  singleUserInfoTable(id:any){
    return this.httpClientInjection.get(this.usersTable+`/${id}`);
  }
}
