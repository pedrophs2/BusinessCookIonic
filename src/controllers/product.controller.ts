import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductController {

    constructor(private http: HttpClient) {}
    public url: string = environment.api

    public async getAll(): Promise<any> {
        return await this.http.get(`${this.url}/product`)
            .toPromise().then(p => p)
    }

    public async create(product: any): Promise<any> {
        return await this.http.post(`${this.url}/product`, product)
            .toPromise().then(p => p)
    }
}