import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compartidos/components/home/home.component';
import { NotFoundComponent } from './compartidos/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'categorias',
    loadChildren: () => import ('./categorias/categorias.module').then(m => m.CategoriasModule)},
  { path: 'recetas',
    loadChildren: () => import ('./recetas/recetas.module').then(m => m.RecetasModule)},
  { path: 'compartidos',
    loadChildren: () => import ('./compartidos/compartidos.module').then(m => m.CompartidosModule)},
  { path: 'compartidos/login', redirectTo:'login'},
  // { path: '', component: NotFoundComponent, pathMatch:'full', redirectTo:'notFound'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
