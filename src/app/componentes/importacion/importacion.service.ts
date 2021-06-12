import { Injectable } from '@angular/core';
import {ImportacionI} from '../../models/ImportacionModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ImportacionService {

private url = environment.apiUrl + '/Importacion';

 constructor (private http: HttpClient){}

 
Importar(Importacion: ImportacionI ):Observable<string>{
  return this.http.post<string>(this.url,Importacion).pipe(catchError(this.handleError));
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
