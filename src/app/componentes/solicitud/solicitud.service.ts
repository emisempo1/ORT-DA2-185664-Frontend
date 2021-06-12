import { Injectable } from '@angular/core';
import {SolicitudI} from '../../models/solicitudModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class SolicitudService {

private url = environment.apiUrl + '/Solicitud';

 constructor (private http: HttpClient){}

Obtener():Observable<SolicitudI[]>{
  return this.http.get<SolicitudI[]>(this.url).pipe(catchError(this.handleError)); 
}

Agregar(Solicitud: SolicitudI ):Observable<string>{
  return this.http.post<string>(this.url,Solicitud).pipe(catchError(this.handleError));
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
