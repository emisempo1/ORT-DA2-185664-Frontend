import { Injectable } from '@angular/core';
import {CategoriaI} from '../../models/CategoriaModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'
import {NavegacionCategoriaI} from '../../models/navegacionCategoriaModel'
import {NavegacionPlaylistI} from '../../models/navegacionPlaylistModel'

@Injectable({
  providedIn: 'root'
})

export class NavegacionService {

private url = environment.apiUrl + '/Categorias';

private urlPlaylist = environment.apiUrl + '/Playlists';

 constructor (private http: HttpClient){}



Obtener(nombreCategoria: string):Observable<CategoriaI>{
  return this.http.get<CategoriaI>(this.url,{ params: {nombre: nombreCategoria}}).pipe(catchError(this.handleError)); 
}

ObtenerCategoria(nombreCategoria: string):Observable<NavegacionCategoriaI>{
  return this.http.get<NavegacionCategoriaI>(this.url,{ params: {nombre: nombreCategoria}}).pipe(catchError(this.handleError)); 
}


ObtenerPlaylist( NombrePlaylist : string):Observable<NavegacionPlaylistI>{
  return this.http.get<NavegacionPlaylistI>(this.urlPlaylist,{ params: {nombre: NombrePlaylist}}).pipe(catchError(this.handleError)); 
}


handleError(error: HttpErrorResponse){
let message: string;
if(error.error instanceof ErrorEvent ){
message = "servidor esta apagado intenta denuevo"
}else{
message = error.error;
}
return throwError(message);
}

}