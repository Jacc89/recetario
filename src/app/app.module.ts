import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidosModule } from './compartidos/compartidos.module';
import { MaterialModule } from './material/material/material.module';
import { CategoriasModule } from './categorias/categorias.module';
import { RecetasModule } from './recetas/recetas.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidosModule,
    MaterialModule,
    CategoriasModule,
    RecetasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
