import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/api/auth.service';
import { controls } from './controls.form'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: AuthService
    ) { }

  ngOnInit() {
    controls.forEach(control => {
      this.formGroup.addControl(control, new FormControl())
    })
  }

  async login() {
    try {
      let response = await this.service.login(this.formGroup.value)
      localStorage.setItem('user', JSON.stringify(response.response))
      this.router.navigate(['./products'])
    } catch(error) {
      console.log(error.error.message)
    }
  }

}
