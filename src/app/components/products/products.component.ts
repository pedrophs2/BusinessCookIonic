import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/api/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(
    private service: ProductService,
    private router: Router
  ) { }

  products: any[] = []

  ngOnInit() {
    this.populateList()
  }

  private async populateList() {
    let response = await this.service.getAll()
    this.products = response.response
  }

  public _createNew() {
    this.router.navigate(['./new'])
  }

}
