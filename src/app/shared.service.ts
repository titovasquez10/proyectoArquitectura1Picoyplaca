import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  //RUTAS DE LA API EN PYTHON
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  //METODO PARA CIUDADES

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/ciudades/');
  }

  addCiudad(val:any){
    return this.http.post(this.APIUrl + '/ciudades/', val);
  }

  updateCiudad(val:any){
    return this.http.put(this.APIUrl + '/ciudades/', val);
  }

  deleteCiudad(val:any){
    return this.http.delete(this.APIUrl + '/ciudades/', val);
  }

//----------------------------------------------------------------------

//METODO PARA PICOPLACA

   getPicoList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/picoplaca/');
  }

  addPicoplaca(val:any){
    return this.http.post(this.APIUrl + '/picoplaca/', val);
  }

  updatePicoplaca(val:any){
    return this.http.put(this.APIUrl + '/picoplaca/', val);
  }

  deletePicoplaca(val:any){
    return this.http.delete(this.APIUrl + '/picoplaca/', val);
  }

  //-------------------------------------------------------------

  //METODO PICTURE
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile', val);
  }

  //METODO PARA RETORNAR TODAS LAS CIUDADES
  getAllCiudadadNombre():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ciudades/');
  }


}
