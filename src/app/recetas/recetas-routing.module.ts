import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRectComponent } from './components/list-rect/list-rect.component';
import { HomeRectComponent } from './components/home-rect/home-rect.component';
import { DeleteRectComponent } from './components/delete-rect/delete-rect.component';
import { CreateRectComponent } from './components/create-rect/create-rect.component';
import { EditRectComponent } from './components/edit-rect/edit-rect.component';
import { DetailsRectComponent } from './components/details-rect/details-rect.component';

const routes: Routes = [
  { path: '', component: HomeRectComponent, 
  children: [
    { path: 'listRect', component: ListRectComponent},
    { path: 'createRect', component: CreateRectComponent},
    { path: 'editRect/:id', component: EditRectComponent},
    { path: 'deleteRect/:id', component: DeleteRectComponent},
    { path: 'detailsRect', component: DetailsRectComponent},
    // { path: '**', redirectTo:'detailsRect' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
