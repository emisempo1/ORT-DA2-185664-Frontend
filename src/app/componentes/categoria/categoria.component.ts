import { Component, OnInit } from '@angular/core';
import {CategoriaI} from '../../models/categoriaModel'
import {CategoriaService} from './categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})


export class CategoriaComponent implements OnInit {

  displayedColumns: string[] = ['NombrePlaylist'];

  PlaylistAAgregar:string;
  cantidadPlaylists = 3;

 
  categoriaFormulario = 
  {NombreCategoria: 'Cachengue',
  ListaPlaylist: [
    'Cachengue',
    'Escabio',
    ]};

    
  audios: string[] = this.categoriaFormulario.ListaPlaylist;

  respuesta:string;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  Agregar(){
    this.categoriaService.Agregar(this.categoriaFormulario).subscribe(data => this.respuesta = data, (error:string) => this.showError(error));
  }

  AgregarPlaylistDelFormulario(PlaylistAAgregar : string){
    this.categoriaFormulario.ListaPlaylist = [
      PlaylistAAgregar,
      ];
      for (let i = 0; i < this.cantidadPlaylists; i++) {
        this.categoriaFormulario.ListaPlaylist.push(this.audios[i]);
      }
      this.audios = this.categoriaFormulario.ListaPlaylist;
      this.cantidadPlaylists = this.cantidadPlaylists + 1;
  }

EliminarPlaylistDelFormulario(){
      this.categoriaFormulario.ListaPlaylist = [];
      this.cantidadPlaylists = this.cantidadPlaylists - 1;
      this.audios = this.audios.reverse();
      for (let i = 0; i < this.cantidadPlaylists; i++) {
        this.categoriaFormulario.ListaPlaylist.push(this.audios[i]);
      }
      this.audios = this.categoriaFormulario.ListaPlaylist;    
  }


  private showError(message:string){
    this.respuesta = message;
  }


}

