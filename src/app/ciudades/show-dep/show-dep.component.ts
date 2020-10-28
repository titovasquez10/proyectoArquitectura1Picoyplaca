import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  CiudadList:any=[];

  ModalTitle:string;
  ActivateAddEditDepcomp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      CiudadId:0,
      CiudadNombre:""
    }
    this.ModalTitle="Add Ciudad";
    this.ActivateAddEditDepcomp=true;
  }

  editClick(item){
    this.dep=item;
    this.ModalTitle="Edit Ciudad"
    this.ActivateAddEditDepcomp=true;
  }

  closeClick(){
    this.ActivateAddEditDepcomp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.CiudadList=data;
    });
  }

}
