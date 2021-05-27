import { Component, OnInit } from '@angular/core';
import {PsicologoI} from '../../models/psicologoModel'
import {PsicologoService} from './psicologo.service';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit {
   displayedColumns: string[] = ['NombreAudio'];

  PsicologoAAgregar:string;
  cantidadProblematicas = 3;
  
  respuesta:string;

  elPsicologoFormulario = {
  Email: 'elviejopsicologo@gmail.com',
  Nombre: 'Roku', 
  TipodeConsulta: 'VideoLlamada',
  ProblematicasEspecializadas: [
        'Depresion',
        'Estres',
        'Ansiedad'
        ],
 FechaIngreso: '1995-05-05',  
 DireccionFisica: 'yaguaron 1415'}


 psicologos: string[] = this.elPsicologoFormulario.ProblematicasEspecializadas;

 constructor(private psicologoService: PsicologoService) { }

  ngOnInit(): void {
  }

  Agregar(psicologo: PsicologoI){
    this.psicologoService.Agregar(this.elPsicologoFormulario).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }
  
  AgregarProblematicaDelFormulario(ProblematicaAAgregar : string){
    this.elPsicologoFormulario.ProblematicasEspecializadas = [
      ProblematicaAAgregar,
      ];
      for (let i = 0; i < this.cantidadProblematicas; i++) {
        this.elPsicologoFormulario.ProblematicasEspecializadas.push(this.psicologos[i]);
      }
      this. psicologos = this.elPsicologoFormulario.ProblematicasEspecializadas;
      this.cantidadProblematicas = this.cantidadProblematicas + 1;
  }

EliminarProblematicaDelFormulario(){
      this.elPsicologoFormulario.ProblematicasEspecializadas = [];
      if (this.cantidadProblematicas != 0) 
      {
        this.cantidadProblematicas = this.cantidadProblematicas - 1;
      }
      this.psicologos = this.psicologos.reverse();
      for (let i = 0; i < this.cantidadProblematicas; i++) {
        this.elPsicologoFormulario.ProblematicasEspecializadas.push(this.psicologos[i]);
      }
      this.psicologos = this.elPsicologoFormulario.ProblematicasEspecializadas;    
  }


  private showError(message:string){
    this.respuesta = message;
  }

}
