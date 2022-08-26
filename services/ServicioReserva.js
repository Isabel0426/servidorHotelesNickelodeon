import {modeloReserva} from '../models/modeloDatosReserva'

export class ServicioReserva{

    constructor(){}
    //TERMINAR DE CONFIGURAR
    async buscarTodas(){
        let habitaciones=await modeloReserva.find()
        return habitaciones
    }

    async buscarPorId(id){
        let habitacion=await modeloReserva.findById(id)
        return habitacion
    }

    async agregar(datos){

        let habitacionAGuardar=new modeloReserva(datos)
        return await habitacionAGuardar.save()

    }

    async actualizar(id,datos){

        return modeloReserva.findByIdAndUpdate(id,datos)

    }



}