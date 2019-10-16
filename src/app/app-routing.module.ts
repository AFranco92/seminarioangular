import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'about',
    component: BreweryAboutComponent
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
