import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Calcular', 'url': '/calculate', icon: 'calculator'},
    { title: 'Ingredientes', url: '/products', icon: 'pizza' },
    // { title: 'Pedidos', url: '/orders', icon: 'cart'},
    { title: 'Sair', url: '/login', icon: 'log-out' }
  ]

  constructor() {}
}
