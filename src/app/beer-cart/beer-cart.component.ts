import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.scss']
})
export class BeerCartComponent implements OnInit {
  public titulos: any = {
    name : 'Nombre de cerveza',
    quantity : 'Cantidad',
    unitprice : 'Precio unitario',
    total : 'Total'
  }
  constructor() { }

  ngOnInit() {
  }

}
