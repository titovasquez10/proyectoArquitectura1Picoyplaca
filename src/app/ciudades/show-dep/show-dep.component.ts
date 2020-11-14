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

  CiudadIdFilter:string="";
  CiudadNombreFilter:string="";
  CiudadListWithoutFilter:any=[];

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
  
  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteCiudad(item.CiudadId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepcomp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.CiudadList=data;
      this.CiudadListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CiudadIdFilter = this.CiudadIdFilter;
    var CiudadNombreFilter = this.CiudadNombreFilter;
  

    this.CiudadList = this.CiudadListWithoutFilter.filter(function (el){
        return el.CiudadId.toString().toLowerCase().includes(
          CiudadIdFilter.toString().trim().toLowerCase()
        )&&
        el.CiudadName.toString().toLowerCase().includes(
          CiudadNombreFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc){
    this.CiudadList = this.CiudadListWithoutFilter.sort(function(a,b){
      if (asc) {
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
