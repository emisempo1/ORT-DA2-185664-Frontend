import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private urlLogin = environment.apiUrl + '/Login';

  respuesta:boolean = false;

  constructor (private http: HttpClient){}

  Login(unEmail:string,unaPassword:string):boolean{
  this.http.get<boolean>(this.urlLogin,{ params: {email:unEmail ,password:unaPassword }}).subscribe(data =>  this.respuesta = data); 
  return this.respuesta;
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
