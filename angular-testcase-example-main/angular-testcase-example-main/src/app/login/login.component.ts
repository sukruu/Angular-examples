import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[_A-Za-z0-9]+[_A-Za-z0-9-]*[_A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$")]],
      password: [null, Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")],
    });
   }

  ngOnInit(): void {
  }

  resetForm() {
    this.loginForm.reset();
  }

  onSubmit() {
    console.log('this.loginForm.value', this.loginForm.value);
    console.log('this.loginForm.valid', this.loginForm.valid);
    if (this.loginForm.invalid) {
      return;
    }


    // this.authService.login(this.loginForm.value).subscribe((result: any) => {
    //   if(result && result.data) {
    //     localStorage.setItem('user', JSON.stringify(result.data));
    //     this.toaster.showToaster('success', result.message);
    //     this.authService.setLoginValue(true);
    //     this.router.navigate(['/dashboard']);
    //   }
    // }, error => {
    //   this.toaster.showToaster('error', error.error.message);
    // });

  }

  public checkLogin() {
    this.data = {
      email: 'ashish@gmail.com',
      passWord: 'A@shish02'
    };
  }

MAIL_RegExp = /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[_A-Za-z0-9]+[_A-Za-z0-9-]*[_A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
Pass_RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/i;

checkValidation(uemail:string, upass:string) {
    if (!this.MAIL_RegExp.test(uemail)) {
        return false;
    } else if (!this.Pass_RegExp.test(upass)) {
      console.log('in if email not match', uemail);

      return false;
    }else {
      return true;
    }
}
}
