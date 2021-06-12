import { Injectable } from '@angular/core';
import {BonificacionI} from '../../models/BonificacionModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'
import * as Cookies from 'js-cookie';


@Injectable({
  providedIn: 'root'
})

export class BonificacionService {

private url = environment.apiUrl + '/Bonificacion';

constructor (private http: HttpClient){}


ObtenerBonificaciones():Observable<BonificacionI[]>{
  return this.http.get<BonificacionI[]>(this.url).pipe(catchError(this.handleError)); 
}


AprobarBonificacion(Bonificacion: BonificacionI ):Observable<string>{

  const httpOptions = {
    headers: new HttpHeaders({
      'token': Cookies.get('token')
    })
  };
  
  return this.http.post<string>(this.url,Bonificacion,httpOptions).pipe(catchError(this.handleError)); 
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