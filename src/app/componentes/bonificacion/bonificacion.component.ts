import { Component, OnInit } from '@angular/core';
import {BonificacionService} from './bonificiacion.service'
import {BonificacionI} from '../../models/BonificacionModel'



@Component({
  selector: 'app-bonificacion',
  templateUrl: './bonificacion.component.html',
  styleUrls: ['./bonificacion.component.css']
})
export class BonificacionComponent implements OnInit {
  listaBonificacion: BonificacionI[];
  bonificacionAprobada =  {Email: 'emaildepruebapacinete@gmail.com',PorcentajeDescuento: '0', Usado: 'false',Aprobado : 'false'};
  emailPaciente:string;
  respuesta:string;

  playlist:BonificacionI;

  constructor(private bonificacionService: BonificacionService) { }

  ngOnInit(): void {
    this.ObtenerBonificacion();
  }

  ObtenerBonificacion(){
    this.bonificacionService.ObtenerBonificaciones().subscribe(data =>  this.listaBonificacion = data);
  }


  SetEmail(EmailPaciente:string){
    this.bonificacionAprobada.Email = EmailPaciente;
  }

  AprobarBonificacion(){
    this.bonificacionService.AprobarBonificacion(this.bonificacionAprobada).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }

  private showError(message:string){
    this.respuesta = message;
  }
  
}
