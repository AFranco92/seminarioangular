import { Component, OnInit } from '@angular/core';
import { Beer } from '../../app/beer';
import { BeerDataService } from '../beer-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  public titulos: any = {
      name : 'Nombre de cerveza',
      description : 'Descripción',
      price : 'Precio unitario',
      image : 'Imagen',
      stock : 'Stock',
      quantity: 'Cantidad',
  }

  constructor(private beersdataservice: BeerDataService, private cartservice: CartService) {}
  
  public cervezas: Beer[];
  public subtotal: number = 0;

  public inputValue: String = "";

  ngOnInit() {
    this.beersdataservice.getBeers().subscribe(
      response => {
        this.cervezas = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            const element = response[key];
            this.cervezas.push(element);
          }
        }
      }
    )
  }

  masCerveza(cerveza) {
    if(cerveza.stock > 0 && cerveza.quantity < cerveza.stock) {
      cerveza.quantity += 1;
    }
  }

  menosCerveza(cerveza) {
    if(cerveza.quantity > 0) {
      cerveza.quantity -= 1;
    }
  }

  onlyNumbers(event) {
    if(event.key < "0" || event.key > "9")
      event.preventDefault();
  }

  addCart(beer: Beer) {
    if(beer.stock > 0 && beer.quantity <= beer.stock && beer.quantity > 0) {
      this.cartservice.addToCart(beer);
      beer.stock -= beer.quantity;
    }
  }

}
