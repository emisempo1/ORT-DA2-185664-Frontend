import { Injectable } from '@angular/core';
import {PsicologoI} from '../../models/PsicologoModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'
import * as Cookies from 'js-cookie';


@Injectable({
  providedIn: 'root'
})

export class PsicologoService {

private url = environment.apiUrl + '/Psicologos';

 constructor (private http: HttpClient){}

Obtener():Observable<PsicologoI[]>{
  return this.http.get<PsicologoI[]>(this.url).pipe(catchError(this.handleError)); 
}

Agregar(Psicologo: PsicologoI ):Observable<string>{

const httpOptions = {
  headers: new HttpHeaders({
    'token': Cookies.get('token')
  })
};

return this.http.post<string>(this.url,Psicologo,httpOptions).pipe(catchError(this.handleError)); 
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
