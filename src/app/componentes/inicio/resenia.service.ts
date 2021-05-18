import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {catchError,map,tap} from 'rxjs/operators'
import {ReseniaI} from '../../models/reseniaModel'
import {ReservaEfectuadaI} from '../../models/reservaEfectuadaModel'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReseniaService {

  private urlResenia = environment.apiUrl + '/Resenia';

constructor (private http: HttpClient){}

//le tengo que pasar la busqueda por parametro.
  agregarResenia(unaReserva: ReseniaI):Observable<string>{
  return this.http.post<string>(this.urlResenia, unaReserva);
  }


  ObtenerResenias(nombreHospedaje: string):Observable<ReseniaI[]>{
    return this.http.get<ReseniaI[]>(this.urlResenia,{ params: {nombreHospedaje: nombreHospedaje}}).pipe(catchError(this.handleError)); 
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
