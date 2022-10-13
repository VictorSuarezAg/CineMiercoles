import { pintarSillas } from '../helper/pintarSillas.js'
import { seleccionSillas } from '../helper/seleccionSillas.js'
import { validarSillas } from '../helper/validarSillas.js'
import { asientos } from '../helper/baseDatosAsientos.js'

//acceder al localstorage y preguntar si asientos != null si es null cargo esta sino cargo el localstorage
let sillasSeleccionadas = JSON.parse(localStorage.getItem('asientos'))

if (sillasSeleccionadas == null) {
    sillasSeleccionadas = asientos
}

if (asientos.estado != 0) {
    pintarSillas(sillasSeleccionadas)
} else {
    pintarSillas(asientos)
}

let cinema = document.querySelector('#salacinema')

seleccionSillas(asientos)
validarSillas(asientos)