import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PicoplacaComponent} from './picoplaca/picoplaca.component';
import {CiudadesComponent} from './ciudades/ciudades.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path:'picoplaca',component:PicoplacaComponent},
  {path:'ciudades',component:CiudadesComponent},
  {path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
