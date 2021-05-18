import { BusquedaI } from './busquedaModel';

export interface ReservaI{

    // datos del turista
    NombreTurista:string;
    ApellidoTurista :string;
    EmailTurista :string;

    //datos de la reserva
    Busqueda:BusquedaI;

    NombreHospedaje:string;
}