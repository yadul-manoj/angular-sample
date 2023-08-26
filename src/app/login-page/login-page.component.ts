import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  result: any = []

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe(result => { 
      this.result = result
    })
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
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
  }
}
