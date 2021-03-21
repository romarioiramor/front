import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DadosCovidComponent } from './dados-covid/dados-covid.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dadosCovid', component: DadosCovidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
