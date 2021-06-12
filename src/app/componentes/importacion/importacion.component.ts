import { Component, OnInit } from '@angular/core';
import {ImportacionI} from '../../models/importacionModel'
import {ImportacionService} from './importacion.service';

@Component({
  selector: 'app-importacion',
  templateUrl: './importacion.component.html',
  styleUrls: ['./importacion.component.css']
})
export class ImportacionComponent implements OnInit {

  Importacion:ImportacionI = {TipoDeArchivo : "Json" , Path : "https://res.cloudinary.com/bidoware/raw/upload/v1622502852/ArchivosImportacion/playlistyaudios_prd5sr_gxilik_h4iiwp.json"}
  respuesta:string;

  constructor(private importacionService: ImportacionService) { }

  ngOnInit(): void {
  }


  EstablecerPath(){
    if (this.Importacion.TipoDeArchivo == "Json") 
    {
      this.Importacion.Path = "https://res.cloudinary.com/bidoware/raw/upload/v1622502852/ArchivosImportacion/playlistyaudios_prd5sr_gxilik_h4iiwp.json";
    }
    
    if (this.Importacion.TipoDeArchivo == "XML") {
      this.Importacion.Path = "https://res.cloudinary.com/bidoware/raw/upload/v1622737899/ArchivosImportacion/PlaylistYAudios_ishw1h.xml";
    }  
  }

  Importar(importacion: ImportacionI){
    this.importacionService.Importar(this.Importacion).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }

  private showError(message:string){
    this.respuesta = message;
  }

}
