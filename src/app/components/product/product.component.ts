import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/api/product.service';
import { controls } from './controls.form'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  title: string = 'Novo Ingrediente'
  formGroup: FormGroup = new FormGroup({})

  constructor(
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    controls.forEach(control => {
      this.formGroup.addControl(control, new FormControl())
    })
  }

  public async createProduct() {
    try {
      let response = await this.service.create(this.formGroup.value)
      this.router.navigate(['/products'])
      console.log(response)
    } catch(error) {
      console.log(error.error.message)
    }
  }  
  
  public goBack() {
    this.router.navigate(['/products'])
  }

}
