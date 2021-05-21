import { Component, OnInit } from '@angular/core';
import {PlaylistI} from '../../models/playlistModel'
import {PlaylistService} from './playlist.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})


export class PlaylistComponent implements OnInit {

  displayedColumns: string[] = ['NombreAudio'];

  AudioAAgregar:string;
  cantidadAudios = 3;

 
  playListFormulario = 
  {Nombre: 'Cachengue',
  Descripcion:  'Para Escabiar y pasarla bien con tus panas',
  Url:'https://res.cloudinary.com/bidoware/image/upload/v1618094494/ImagenesPlaylist/cachengue_f86nkw.jpg',
  ListaAudio: [
    'Soltero Hasta la Tumba',
    'ElAudioInexistente',
    'Besame'
    ]};

    
  audios: string[] = this.playListFormulario.ListaAudio;

  respuesta:string;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  Agregar(playlist: PlaylistI){
    this.playlistService.Agregar(this.playListFormulario).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }

  AgregarAudioDelFormulario(AudioAAgregar : string){
    this.playListFormulario.ListaAudio = [
      AudioAAgregar,
      ];
      for (let i = 0; i < this.cantidadAudios; i++) {
        this.playListFormulario.ListaAudio.push(this.audios[i]);
      }
      this.audios = this.playListFormulario.ListaAudio;
      this.cantidadAudios = this.cantidadAudios + 1;
  }

EliminarAudioDelFormulario(){
      this.playListFormulario.ListaAudio = [];
      this.cantidadAudios = this.cantidadAudios - 1;
      this.audios = this.audios.reverse();
      for (let i = 0; i < this.cantidadAudios; i++) {
        this.playListFormulario.ListaAudio.push(this.audios[i]);
      }
      this.audios = this.playListFormulario.ListaAudio;    
  }


  private showError(message:string){
    this.respuesta = message;
  }


}

