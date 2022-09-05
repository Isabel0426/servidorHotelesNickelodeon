import{ServicioReserva, ServicioReserva, ServicioReserva, ServicioReserva, ServicioReserva} from '../services/ServicioReserva.js'

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
    //buscar reserva por id 
    buscarReservasPorId(request,response){

        let ServicioReserva = new ServicioReserva()

        try {
            response.status(200).json({
                mensaje:"exito en la consulta ",
                datos:ServicioReserva.buscarPorId()
               })
        } catch (error) {
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //Agregar reserva 

    agregarReserva(request, response){
        let cuerpo = request.body
        let ServicioReserva = new ServicioReserva()
        try {
            ServicioReserva.agregar(cuerpo)
            response.status(200).json({
                mensaje:"exito agregando la reserva",
                datos:null
            }) 
            
        } catch (error) {
            response(400).json({
                mensaje:"fallo en reservando "+error,
                datos:null
             })
        }
    }

    //actualizar o editar reserva
    editarReserva(request,response){
        let id=request.params.id
        let datos=request.body

        let ServicioReserva = new ServicioReserva()

        try {
            ServicioReserva.actualizar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la reserva "+id,
                datos:null
            }) 
        } catch (error) {
            response(400).json({
                mensaje:"fallo en la modificacion de reserva "+error,
                datos:null
             })
        }
    }

    //Eliminar reserva

    eliminarReserva(request,response){
        try {
            response.status(200).json({})   
        } catch (error) {
            response(400).json({})
        }
    }
}