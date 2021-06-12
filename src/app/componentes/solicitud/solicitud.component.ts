import { Component, OnInit } from '@angular/core';
import {SolicitudService} from './solicitud.service';
import {SolicitudI} from '../../models/SolicitudModel'

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent implements OnInit {


  SolicitudFormulario = {Celular:'09850322', Email:'elpacientedeprimido@gmail.com',Nombre:'jorgeeldeprimido',FechaNacimiento:'1996-06-13',Problematica:'Depresion',MinutosDeLaConsulta:'60'}
  respuesta:string;

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
  }

  Agregar(solicitud: SolicitudI){
    this.solicitudService.Agregar(this.SolicitudFormulario).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }

  private showError(message:string){
    this.respuesta = message;
  }

}

