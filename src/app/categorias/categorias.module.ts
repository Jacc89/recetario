import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListCategComponent } from './components/list-categ/list-categ.component';
import { EditCategComponent } from './components/edit-categ/edit-categ.component';
import { DeleteCategComponent } from './components/delete-categ/delete-categ.component';
import { CreateCategComponent } from './components/create-categ/create-categ.component';
import { HomeCategComponent } from './components/home-categ/home-categ.component';


@NgModule({
  declarations: [
    ListCategComponent,
    EditCategComponent,
    DeleteCategComponent,
    CreateCategComponent,
    HomeCategComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
