import { Injectable } from '@angular/core';
import {CategoriaI} from '../../models/CategoriaModel'
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

private url = environment.apiUrl + '/Categorias';

 constructor (private http: HttpClient){}


Agregar(Categoria: CategoriaI ):Observable<string>{
  return this.http.post<string>(this.url,Categoria).pipe(catchError(this.handleError));
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