import{ServicioReserva, ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva {
    constructor(){}

    //buscar las reservas
    buscarReservas(request,response){

    //llamar servicio
    let ServicioReserva =new ServicioReserva()

    try {
        response.status(200).json({
            mensaje:"exito en la consulta ",
            datos:ServicioReserva.buscarTodas()
           })
    } catch (error) {
        response(400).json({
            mensaje:"fallo en la consulta "+error,
            datos:null
        })
    }

    }
}