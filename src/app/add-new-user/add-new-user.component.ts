import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginAccessService } from '../login-access.service';
import { NewUserAccessService } from '../new-user-access.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent {
  formBuliderInjection = inject(FormBuilder);
  newUserDataForm: any;
  loginFormCompletionTable:boolean=false;
  serviceInjection = inject(LoginAccessService);
  _snackBar = inject(MatSnackBar);
  userDataList: any[] = [];
  ngOnInit(): void {
    this.newUserDataForm = this.formBuliderInjection.group({
      userId: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  addNewUserSubmission() {
    const payLoad = {
      userId: this.newUserDataForm.get('userId').value,
      title: this.newUserDataForm.get('title').value,
      body: this.newUserDataForm.get('body').value,
    };

    this.serviceInjection.newUserFunc(payLoad).subscribe((data) => {
      this.loginFormCompletionTable=true
      this.userDataList.push(this.newUserDataForm.value);
      this._snackBar.open('Registration Success', '', { duration: 1000 });
      this.newUserDataForm.clear()

    });
  }
}
