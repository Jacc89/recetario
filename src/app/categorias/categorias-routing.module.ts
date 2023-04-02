import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCategComponent } from './components/home-categ/home-categ.component';
import { ListCategComponent } from './components/list-categ/list-categ.component';
import { CreateCategComponent } from './components/create-categ/create-categ.component';
import { EditCategComponent } from './components/edit-categ/edit-categ.component';
import { DeleteCategComponent } from './components/delete-categ/delete-categ.component';

const routes: Routes = [
  { path: '', component: HomeCategComponent, 
  children: [
    { path: 'listCateg', component: ListCategComponent},
    { path: 'createCateg', component: CreateCategComponent},
    { path: 'editCateg/:id', component: EditCategComponent},
    { path: 'deleteCateg/:id', component: DeleteCategComponent},
    { path: '**', redirectTo:'listCateg' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
