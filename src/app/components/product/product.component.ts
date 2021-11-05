import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    controls.forEach(control => {
      this.formGroup.addControl(control, new FormControl())
    })
    this.getProduct()
  }

  private async getProduct() {
    let id = this.route.snapshot.params['id']
    let product = await this.service.get(id)
    this.title = product.response.name

    this.populateForm(product.response)
  }

  private populateForm(product: any) {
    Object.keys(this.formGroup.controls).forEach(attr => {
      this.formGroup.get(attr).setValue(product[attr])
    })
  } 

  public async saveProduct() {
    try {
      let update = this.route.snapshot.params['id']
      let response

      if(!update){
        response = await this.service.create(this.formGroup.value)
      } else {
        response = await this.service.update(this.formGroup.value)
      }

      console.log(response)
      this.router.navigate(['/products'])
    } catch(error) {
      console.log(error.error.message)
    }
  }  
  
  public goBack() {
    this.router.navigate(['/products'])
  }

}
