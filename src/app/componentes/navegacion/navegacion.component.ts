import { Component, OnInit } from '@angular/core';
import { NavegacionPlaylistI } from 'src/app/models/navegacionPlaylistModel';
import { PlaylistI } from 'src/app/models/playlistModel';
import {CategoriaI} from '../../models/CategoriaModel'
import {AudioI} from '../../models/audioModel'
import {NavegacionCategoriaI} from '../../models/navegacionCategoriaModel'
import {NavegacionAudioI} from '../../models/navegacionAudioModel'
import {NavegacionService} from '../navegacion/navegacion.service';



@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  unaCategoria: CategoriaI;
  unaPlaylist: NavegacionPlaylistI;
 
   
  unaCategoriaCompleta: NavegacionCategoriaI;


  listaPlaylist: string[];
  listaAudios:AudioI[];

  NombreCategoria:string;
  NombrePlaylist:string;
  respuesta:string;

  playlist:PlaylistI;

  constructor(private navegacionService: NavegacionService) { }

  ngOnInit(): void {
  }

  ObtenerPlaylist(){
    this.navegacionService.Obtener(this.NombreCategoria).subscribe(data =>  this.unaCategoria = data);
    this.listaPlaylist = this.unaCategoria?.ListaPlaylist;
  }

  ObtenerAudios(pos:number){
    this.navegacionService.ObtenerCategoria(this.NombreCategoria).subscribe(data =>  this.unaCategoriaCompleta = data);
    this.unaPlaylist = this.unaCategoriaCompleta?.ListaPlaylist[pos];
    this.listaAudios = this.unaCategoriaCompleta?.ListaPlaylist[pos].ListaAudios;
  }


}
