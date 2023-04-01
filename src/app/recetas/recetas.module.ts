import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { ListRectComponent } from './components/list-rect/list-rect.component';
import { EditRectComponent } from './components/edit-rect/edit-rect.component';
import { DeleteRectComponent } from './components/delete-rect/delete-rect.component';
import { CreateRectComponent } from './components/create-rect/create-rect.component';
import { HomeRectComponent } from './components/home-rect/home-rect.component';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [
    ListRectComponent,
    EditRectComponent,
    DeleteRectComponent,
    CreateRectComponent,
    HomeRectComponent
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule,
    MaterialModule
  ]
})
export class RecetasModule { }
