import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/services/api/product.service';
import { controls } from './controls.form'

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  selectOptions: {title: string, subtitle: string}
  products: any[] = []
  calculatedValue: number = 0

  constructor(private service: ProductService) { }

  ngOnInit() {
    controls.forEach(control => {
      this.formGroup.addControl(control, new FormControl())
    })

    this.selectOptions = {
      title: 'Ingredientes Cadastrados',
      subtitle: 'Selecione o ingrediente para calcular a receita'
    }

    this.getProducts()
  }

  private async getProducts() {
    let response = await this.service.getAll()
    this.products = response.response
  }

  public calculate() {
    let amount = this.value('amount')
    let price = this.value('price')
    let used = this.value('used')

    this.calculatedValue = (price * used) / amount
  }

  public async setValues(value) {
    let id = value.detail.value
    let response = await this.service.get(id)
    let product = response.response
    
    this.formGroup.get('amount').setValue(product.amount)
    this.formGroup.get('price').setValue(product.price)
  }

  private value(control: string) {
    if(this.formGroup && this.formGroup.get(control))
      return this.formGroup.get(control).value
    
    return null
  }

}
