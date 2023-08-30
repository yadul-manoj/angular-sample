import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    result: any = []

    constructor(private http: HttpClient) {

    }

    async loginUser() {
        this.http.get('http://localhost:3000/users').subscribe(result => {
            this.result = result
        })
        await new Promise(f => setTimeout(f, 1000));
        console.log('2', this.result)
        return this.result
    }
} 