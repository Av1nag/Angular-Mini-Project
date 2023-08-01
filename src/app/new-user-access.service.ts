import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewUserAccessService {
  httpClientInjection = inject(HttpClient);
  newUserVadliationApi = environment.dataTableApi;

  constructor() { }
  // newUserFunc(payLoad: any) {
  //   return this.httpClientInjection.post(this.newUserVadliationApi, payLoad);
  // }
}
