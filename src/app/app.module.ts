import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BeerDataService } from './beer-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { CartService } from './cart.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeerListComponent,
    FooterComponent,
    BreweryAboutComponent,
    BeerCartComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BeerDataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
