import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompartidosRoutingModule } from './compartidos-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CompartidosRoutingModule
  ]
})
export class CompartidosModule { }
