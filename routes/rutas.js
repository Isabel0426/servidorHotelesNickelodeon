import express from 'express'

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'
let controladorHabitacion=new ControladorHabitacion()

//variable para personalizar las rutas (ENDPOINTS) de mis servicios
export let rutas=express.Router()


//escribo mis rutas (cada ruta es un servicio)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

rutas.get('/viajescomfama/v1/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/viajescomfama/v1/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/viajescomfama/v1/habitacion',controladorHabitacion.agregarHabitacion)
rutas.put('/viajescomfama/v1/habitacion/:id',controladorHabitacion.editarHabitacion)
//CONFIGURAR LAS RUTAS DE LAS RESERVAS 

//buscar todas las reservas
rutas.get('/viajescomfama/r2/reservas',ControladorReserva.buscarReservas)
//buscar reserva por id
rutas.get('/viajescomfama/r2/reservas/:id',ControladorReserva.buscarReservasPorId)
//agregar reserva
rutas.post('/viajescomfama/r2/reservas',ControladorReserva.agregarReserva)
//editar reserva 
rutas.put('/viajescomfama/r2/reservas/:id',ControladorReserva.editarReserva)
//eliminar reserva
rutas.delete('/viajescomfama/r2/reservas/:id',ControladorReserva.eliminarReserva)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS
/*rutas.post('viajescomfama/v1/reserva',function (req, res) {
    res.send('Hello World')
})
rutas.put('viajescomfama/v1/reserva/:id',function (req, res) {
    res.send('Hello World')
})
rutas.delete('viajescomfama/v1/cancelacion/:id',function (req, res) {
    res.send('Hello World')
})*/