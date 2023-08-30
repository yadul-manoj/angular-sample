import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  result: any = []
  userID: number = 2;

  constructor(private toastr: ToastrService, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    phno: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  registerUser() {
    this.registrationForm.value['id'] = this.userID
    let flag = this.registerService.getUsers(this.registrationForm.value)
    console.log('ok', flag)
    if (flag) {
      this.toastr.success('Registration successful.');
      this.userID++
      this.router.navigate(['/home']);
    }
    else {
      this.toastr.error('Registration fail.')
    }
  }
}
