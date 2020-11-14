import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  PicoplacaList:any=[];

  ModalTitle:string;
  ActivateAddEditEmpcomp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      DigitoplacaId:0,
      DiaSemana:"",
      Ciudad:"",
      FechaEntrada:"",
      PhotoFileName:"cargar.jpg"
    }
    this.ModalTitle="Add Picoplaca";
    this.ActivateAddEditEmpcomp=true;
  }

  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Picoplaca"
    this.ActivateAddEditEmpcomp=true;
  }
  
  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deletePicoplaca(item.PicoplacaId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpcomp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getPicoList().subscribe(data=>{
      this.PicoplacaList=data;
    });
  }

}
