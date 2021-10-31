import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductController } from 'src/controllers/product.controller';
import { ProductService } from 'src/services/api/product.service';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'new', loadChildren: () => import('./../product/product.module').then(m => m.ProductModule)
  }
];

const components = [
  ProductsComponent
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
export class ProductsRoutingModule { }
