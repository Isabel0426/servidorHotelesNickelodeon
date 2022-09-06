import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva {
    constructor(){}

    //buscar las reservas
    async  buscarReservas(request,response){

    //llamar servicio
    let servicioReserva =new ServicioReserva()

    try {
        response.status(200).json({
            mensaje:"exito en la consulta ",
            datos:await servicioReserva.buscarTodas()
           })
    } catch (error) {
        response.status(400).json({
            mensaje:"fallo en la consulta "+error,
            datos:null
        })
    }

    }
    //buscar reserva por id 
    async buscarReservasPorId(request,response){
        let identificador=request.params.id
        let servicioReserva = new ServicioReserva()

        try {
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos:await servicioReserva.buscarPorId(identificador)
               })
        } catch (error) {
            response.status(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //Agregar reserva 

    async agregarReserva(request, response){
        let cuerpo = request.body
        let servicioReserva = new ServicioReserva()
        try {
            servicioReserva.agregar(cuerpo)
            response.status(200).json({
                mensaje:"exito agregando la reserva",
                datos:null
            }) 
            
        } catch (error) {
            response.status(400).json({
                mensaje:"fallo en reservando "+error,
                datos:null
             })
        }
    }

    //actualizar o editar reserva
    async editarReserva(request,response){
       
        let id=request.params.id
        
        let datos=request.body

        let servicioReserva = new ServicioReserva()

        try {
            servicioReserva.actualizar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la reserva "+id,
                datos:null
            }) 
        } catch (error) {
            response.status(400).json({
                mensaje:"fallo en la modificacion de reserva "+error,
                datos:null
             })
        }
    }

    //Eliminar reserva

    async eliminarReserva(request,response){
        let servicioReserva = new ServicioReserva()
        let id=request.params.id
        
        let datos=request.body
        try {
            servicioReserva.eliminar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la reserva "+id,
                datos:null
            }) 
              
        } catch (error) {
            response(400).json({})
        }
    }
}