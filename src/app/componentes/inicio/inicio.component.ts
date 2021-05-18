import { Component, OnInit } from '@angular/core';
import {InicioService} from './inicio.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class InicioComponent implements OnInit {

  Username:string;
  Password:string;

  respuesta:boolean= false;

  constructor(private inicioService : InicioService) { }

  ngOnInit(): void {
  }

  Login():void{
    this.respuesta = this.inicioService.Login(this.Username,this.Password);
    
  }



}
