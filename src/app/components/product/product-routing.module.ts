import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductController } from 'src/controllers/product.controller';
import { ProductService } from 'src/services/api/product.service';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent
  }
]

const components = [
  ProductComponent
]

const providers = [
  ProductController,
  ProductService
]

@NgModule({
  declarations: [...components],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [...providers]
})
export class ProductRoutingModule { }
