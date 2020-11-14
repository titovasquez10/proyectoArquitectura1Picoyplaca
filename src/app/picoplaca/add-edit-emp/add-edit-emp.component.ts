import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  DigitoplacaId:string;
  DiaSemana:string;
  Ciudad:string;
  FechaEntrada:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  CiudadList:any=[];

  ngOnInit(): void {
    this.loadCiudadList();
  }

  loadCiudadList(){
    this.service.getAllCiudadadNombre().subscribe((data:any)=>{
        this.CiudadList=data;

        this.DigitoplacaId=this.emp.DigitoplacaId;
        this.DiaSemana=this.emp.DiaSemana;
        this.Ciudad=this.emp.Ciudad;
        this.FechaEntrada=this.emp.FechaEntrada;
        this.PhotoFileName=this.emp.PhotoFileName;
        this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }


  addPicoplaca(){
    var val = {DigitoplacaId:this.DigitoplacaId,
                  DiaSemana:this.DiaSemana,
                  Ciudad:this.Ciudad,
                  FechaEntrada:this.FechaEntrada,
                  PhotoFileName:this.PhotoFileName};

    this.service.addPicoplaca(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePicoplaca(){
    var val = {DigitoplacaId:this.DigitoplacaId,
      DiaSemana:this.DiaSemana,
      Ciudad:this.Ciudad,
      FechaEntrada:this.FechaEntrada,
      PhotoFileName:this.PhotoFileName};

    this.service.updatePicoplaca(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  
  }

}
