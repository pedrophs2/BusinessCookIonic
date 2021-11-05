import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductController } from 'src/controllers/product.controller';
import { ProductService } from 'src/services/api/product.service';
import { CalculateComponent } from './calculate.component';

const routes: Routes = [
  {
    path: '', component: CalculateComponent
  }
]

const components = [
  CalculateComponent
]

const providers = [
  ProductService,
  ProductController
]

@NgModule({
  declarations: [...components],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [...providers]
})
export class CalculateRoutingModule { }
