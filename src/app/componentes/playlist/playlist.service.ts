import { Injectable } from '@angular/core';
import {PlaylistI} from '../../models/PlaylistModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

private url = environment.apiUrl + '/Playlists';

 constructor (private http: HttpClient){}


Agregar(Playlist: PlaylistI ):Observable<string>{
  return this.http.post<string>(this.url,Playlist).pipe(catchError(this.handleError));
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