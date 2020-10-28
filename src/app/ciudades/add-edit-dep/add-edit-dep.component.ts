import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  CiudadId:string;
  CiudadNombre:string;


  ngOnInit(): void {
    this.CiudadId=this.dep.CiudadId;
    this.CiudadNombre=this.CiudadNombre;
  }

  addCiudad(){
    var val = {CiudadId:this.CiudadId,
                CiudadNombre:this.CiudadNombre};
    this.service.addCiudad(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCiudad(){
    var val = {CiudadId:this.CiudadId,
                CiudadNombre:this.CiudadNombre};
    this.service.updateCiudad(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
