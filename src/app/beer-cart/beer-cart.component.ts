import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.scss']
})
export class BeerCartComponent implements OnInit {

  public titulos: any = {
    name : 'Nombre de cerveza',
    quantity: 'Cantidad',
    price : 'Precio unitario'
  }

  beers = [];
  total = 0;

  constructor(private cartservice: CartService) { }

  ngOnInit() {
    this.cartservice.items.subscribe(data => {
      this.beers = data;
      this.updateTotal(this.beers);
    });
  }

  updateTotal(beers: Beer[]) {
    let aux = 0;
    beers.forEach( (b: Beer) => {
      aux += (b.price*b.quantity);
    });
    this.total = aux;
    return this.total;
  }

}