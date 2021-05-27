import { Component, OnInit } from '@angular/core';
import {InicioService} from './inicio.service';
import { Injectable } from '@angular/core';
import {TokenI} from '../../models/tokenModel'
import * as Cookies from 'js-cookie';

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

  unToken:TokenI;

  respuesta:boolean = false;

  constructor(private inicioService : InicioService) { }

  ngOnInit(): void {
  }

 Login(){
    this.inicioService.Login(this.Username,this.Password).subscribe(data =>  this.unToken = data);
    Cookies.set('token', this.unToken?.Id);
    this.inicioService.ComprobarToken(this.unToken?.Id).subscribe(data =>  this.respuesta = data);
    console.log(Cookies.get('token'));
  }


}
