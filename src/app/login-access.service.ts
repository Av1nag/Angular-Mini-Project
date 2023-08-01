import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginAccessService {
  httpClientInjection = inject(HttpClient);
  loggedIn = new BehaviorSubject<any>(false);
  newUserLoggedIn= new BehaviorSubject<any>(false);
  dataBaseURL = environment.apiURL;
  newUserVadliationApi = environment.dataTableApi;
  constructor() {}

  login(payLoad: any) {
    return this.httpClientInjection.post(this.dataBaseURL + 'login', payLoad);
  }
  newUserFunc(payLoad: any) {
    return this.httpClientInjection.post(this.newUserVadliationApi, payLoad);
  }
}

