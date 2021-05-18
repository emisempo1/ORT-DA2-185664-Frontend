import { Component, OnInit } from '@angular/core';
import {AudioI} from '../../models/audioModel'
import {AudioService} from './audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {


  elAudioFormulario = {Nombre: 'Besame',Duracion: 2, UnidadDeTiempo: 'Minuto',NombreCreador : 'El Reja',UrlImagen: 'https://res.cloudinary.com/bidoware/image/upload/v1618153761/ImagenesAudios/elrejabesame_s4zdgd.jpg',UrlMp3:'https://res.cloudinary.com/bidoware/video/upload/v1618153735/Audios/El_Reja_-_Besame_dxvxwg.mp3'};
  respuesta:string;

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
  }

  Agregar(audio: AudioI){
    this.audioService.Agregar(this.elAudioFormulario).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }

  private showError(message:string){
    this.respuesta = message;
  }

}
