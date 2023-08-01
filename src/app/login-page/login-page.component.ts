import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginAccessService } from '../login-access.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  formBuilderInjection = inject(FormBuilder);
  // pageRouting = inject(Router);
  loginForm: any;
  serviceInjection = inject(LoginAccessService);
  pageNavigation=inject(Router)
  messageOfError=false
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if(localStorage.getItem('isLoggedIn')==='yes'){
      this.pageNavigation.navigate(['/home-page'])
    }

    this.loginForm = this.formBuilderInjection.group({
      mailId: ['',[Validators.required,Validators.minLength(5)]],
      pass: ['',[Validators.required,Validators.minLength(4)]],
    });
  }
  loginFormSubmission() {
    const payLoad = {
      email: this.loginForm.get('mailId').value,
      password: this.loginForm.get('pass').value,
    };
    this.serviceInjection.login(payLoad).subscribe(data => {

      localStorage.setItem('isLoggedIn', 'yes');
      this._snackBar.open('Login Success','',{duration:1000});
      this.serviceInjection.loggedIn.next(true);
      this.pageNavigation.navigate(['/home-page']);

    },
    err=>{
      this.messageOfError = true
    }
    );

  }
}
