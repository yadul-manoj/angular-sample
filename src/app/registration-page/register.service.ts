import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) {

    }

    async getUsers(registrationForm: FormGroup) {
        let flag: boolean
        this.http.post('http://localhost:3000/users', registrationForm).subscribe(
            data => {
                console.log('POST Request is successful ', data);
                flag = true
            },
            error => {
                console.log('Error', error);
                flag = false
            }
        );
        await new Promise(f => setTimeout(f, 1000));
        return flag
    }


    // getUsers(registrationForm: FormGroup): boolean {
    //     let flag: boolean
    //     this.http.post('http://localhost:3000/users', registrationForm).subscribe(
    //         data => {
    //             console.log('POST Request is successful ', data);
    //             flag = true
    //         },
    //         error => {
    //             console.log('Error', error);
    //             flag = false
    //         }
    //     );
    //     setTimeout(() => {}, 1000);
    //     return flag
    // }
}