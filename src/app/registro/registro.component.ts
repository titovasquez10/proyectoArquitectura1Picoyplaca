import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public authService: AuthService) { }

  method(user, pass): void {
    console.log(user, pass);
    return;
  }

  ngOnInit(): void {
  }

}