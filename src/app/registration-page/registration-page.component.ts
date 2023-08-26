import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  result: any = []
  userID: number = 2;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

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
    console.log(this.registrationForm.value)
    const body = {
      "id": this.userID,
      "fullname": this.registrationForm.value['fullname'],
      "phno": this.registrationForm.value['phno'],
      "address": this.registrationForm.value['address'],
      "email": this.registrationForm.value['email'],
      "password": this.registrationForm.value['password']
    };
    // this.http.post('http://localhost:3000/users', body).subscribe(
    //   data => {
    //     console.log('POST Request is successful ', data);
    //   },
    //   error => {
    //     console.log('Error', error);
    //   }
    // );
    this.toastr.success('Registration successful.');
    this.userID++
  }
}
