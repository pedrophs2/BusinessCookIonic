import { Injectable } from "@angular/core";
import { ProductController } from "src/controllers/product.controller";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private controller: ProductController) {}

    public async getAll(): Promise<any> {
        return await this.controller.getAll()
    }

    public async create(product: any): Promise<any> {
        return await this.controller.create(product)
    }

    public async update(product: any): Promise<any> {
        return await this.controller.update(product)
    }

    public async get(id: number): Promise<any> {
        return await this.controller.get(id)
    }
}