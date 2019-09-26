import { Component, OnInit } from '@angular/core';
import { Beer } from '../../app/beer';
import { BEERS } from '../mocks';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  public titulos: any = {
      name : 'Nombre de cerveza',
      description : 'Descripción',
      price : 'Precio',
      image : 'Imagen',
      stock : 'Stock',
      tobuy : 'A comprar',
  }

  public cervezas: Beer[];

  ngOnInit() {
    this.cervezas = BEERS;
  }

  masCerveza(cerveza) {
    if(cerveza.stock > 0 && cerveza.tobuy < cerveza.stock) {
      cerveza.tobuy += 1;
    }
  }

  menosCerveza(cerveza) {
    if(cerveza.tobuy > 0) {
      cerveza.tobuy -= 1;
    }
  }

  comprar(cerveza, quantity) {
    if(cerveza.stock > 0) {
      cerveza.stock -= quantity;
    }
  }
}
