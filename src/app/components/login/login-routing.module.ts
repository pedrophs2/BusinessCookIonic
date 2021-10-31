import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/api/auth.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

const components = [
  LoginComponent
]

const providers = [
  AuthController,
  AuthService,
]

@NgModule({
  declarations: [...components],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [...providers]
})
export class LoginRoutingModule { }
