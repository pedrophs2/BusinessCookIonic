import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { User } from "src/models/user.model";

@Injectable()
export class AuthController {

    constructor(private http: HttpClient) {}
    public url: string = environment.api

    public async login(user: User): Promise<any> {
        return this.http.post<User>(`${this.url}/auth/login`, user)
            .toPromise().then(r => r)
    }

}