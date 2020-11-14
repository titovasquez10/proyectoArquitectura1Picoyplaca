import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { ShowDepComponent } from './ciudades/show-dep/show-dep.component';
import { AddEditDepComponent } from './ciudades/add-edit-dep/add-edit-dep.component';
import { PicoplacaComponent } from './picoplaca/picoplaca.component';
import { ShowEmpComponent } from './picoplaca/show-emp/show-emp.component';
import { AddEditEmpComponent } from './picoplaca/add-edit-emp/add-edit-emp.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    ShowDepComponent,
    AddEditDepComponent,
    PicoplacaComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
