export interface PropuestaI{
    //datos del punto turistico.
    Nombre:string;
    Regiones:string;
    Categorias:string;

    //datos de fechas.
    CheckIn:string;
    CheckOut:string;
    CantidadAdultos:number;
    CantidadNinios: number;
    CantidadBebes: number;
   
   
   // datos del hospedaje .
    NombreHospedaje:string
    CantidadEstrellasHospedaje:number
    DireccionHospedaje :string
    DescripcionHospedaje:string
    PrecioPorNocheHospedaje :number
    HayCapacidadHospedaje : boolean
    NombrePuntoTuristicoHospedaje: string

    //de la propuesta.
    precioTotal:number;  
}



