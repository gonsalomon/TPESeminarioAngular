import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: 'muebles', component: TableComponent, pathMatch: 'prefix'},
  {path: 'categorias', component: TableComponent, pathMatch: 'prefix'},
  {path: '', redirectTo: 'muebles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
