import { Injectable } from "@angular/core";
import { AuthController } from "src/controllers/auth.controller";
import { User } from "src/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private controller: AuthController) {}

    public async login(user: User): Promise<any> {
        return await this.controller.login(user)
    }
}