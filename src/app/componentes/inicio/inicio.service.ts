import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {environment} from '../../../environments/environment'
import {TokenI} from '../../models/tokenModel'




@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private urlLogin = environment.apiUrl + '/Login';
  private urlToken = environment.apiUrl + '/Token';

  respuesta:boolean = false;
  obs:Observable<boolean>;

  constructor (private http: HttpClient){}

   ComprobarToken(token:string):Observable<boolean>{
    this.obs = this.http.get<boolean>(this.urlToken,{ params: {token:token}}).pipe(catchError(this.handleError));
    this.obs.subscribe(data =>  this.respuesta = data);
    return this.obs;
    }

  Login(unEmail:string,unaPassword:string):Observable<TokenI>{
    return this.http.get<TokenI>(this.urlLogin,{ params: {email:unEmail, password: unaPassword}}).pipe(catchError(this.handleError)); 
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
