import { Injectable } from '@angular/core';
import {AudioI} from '../../models/AudioModel'
import {RegionI} from '../../models/RegionModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AudioService {

private url = environment.apiUrl + '/Audios';

 constructor (private http: HttpClient){}

Obtener(region:RegionI):Observable<AudioI[]>{
  return this.http.get<AudioI[]>(this.url,{ params: {tipoRegion: region.Regiones}}).pipe(catchError(this.handleError)); 
}

Agregar(Audio: AudioI ):Observable<string>{
  return this.http.post<string>(this.url,Audio).pipe(catchError(this.handleError));
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
