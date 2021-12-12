import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeController {

  constructor(private http: HttpClient) { }
  private api: string = environment.api

  public async getAll(): Promise<any> {
    return await this.http.get<any>(`${this.api}/recipe`).toPromise().then(data => data)
  }
}
