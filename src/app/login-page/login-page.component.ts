import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  result: any = []

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  // constructor(private http: HttpClient, private toastr: ToastrService, private router: Router, private loginService: LoginService) { }

  async ngOnInit(): Promise<void> {
    this.http.get('http://localhost:3000/users').subscribe(result => {
      console.log(result)
      this.result = result
    })
    // this.result = this.loginService.loginUser()
    // await new Promise(f => setTimeout(f, 1000));
    // console.log(this.result)
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  loginUser() {
    var flag: Boolean = false

    for (var i = 0, len = this.result.length; i < len; i++) {
      if (this.loginForm.value['email'] == this.result[i].email && this.loginForm.value['password'] == this.result[i].password) {
        console.log(i, 'Login success.')
        flag = true
        this.toastr.success('Login success.');
        break
      }
    }

    if (flag == false) {
      console.log('Login fail.')
      this.toastr.error('Login fail.');
    }
    else
      this.router.navigate(['/home']);
  }

  get email() {
    return this.loginForm.get('email')
  }
 
  get password() {
    return this.loginForm.get('password')
  }
}
