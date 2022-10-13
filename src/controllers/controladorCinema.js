import { peliculas } from '../helper/baseDatosCartelera.js'
import { estrenos } from '../helper/baseDatosEstrenos.js'
import { pintarEstrenos } from '../helper/pintarEstrenos.js'
import { pintarPeliculas } from '../helper/pintarPeliculas.js'

// Recorriendo un arreglo en JS
let fila = document.querySelector('#fila')
let fila2 = document.querySelector('#fila2')

pintarPeliculas(peliculas)
pintarEstrenos(estrenos)

let peliculaSeleccionada = {}
    // detectando seleccion de una pelicula
fila.addEventListener('click', (event) => {
    peliculaSeleccionada.poster = event.target.parentElement.querySelector('img').src
    peliculaSeleccionada.nombre = event.target.parentElement.querySelector('h5').textContent //nombre
    peliculaSeleccionada.genero = event.target.parentElement.querySelectorAll('p')[0].textContent //genero
    peliculaSeleccionada.idioma = event.target.parentElement.querySelectorAll('p')[1].textContent //idioma
    peliculaSeleccionada.duracion = event.target.parentElement.querySelectorAll('p')[2].textContent //duracion
    peliculaSeleccionada.clasificacion = event.target.parentElement.querySelectorAll('p')[3].textContent //clasificacion
    peliculaSeleccionada.sinopsis = event.target.parentElement.querySelectorAll('p')[4].textContent //sinopsis
    peliculaSeleccionada.director = event.target.parentElement.querySelectorAll('p')[5].textContent //director
    peliculaSeleccionada.actores = event.target.parentElement.querySelectorAll('p')[6].textContent //actores

    console.log(peliculaSeleccionada);

    localStorage.setItem('peliculaSeleccionada', JSON.stringify(peliculaSeleccionada))

    window.location.href = '../src/views/ampliarInfoPelicula.html'


})

fila2.addEventListener('click', (event) => {
    peliculaSeleccionada.poster = event.target.parentElement.querySelector('img').src
    peliculaSeleccionada.nombre = event.target.parentElement.querySelector('h5').textContent //nombre
    peliculaSeleccionada.genero = event.target.parentElement.querySelectorAll('p')[0].textContent //genero
    peliculaSeleccionada.idioma = event.target.parentElement.querySelectorAll('p')[1].textContent //idioma
    peliculaSeleccionada.duracion = event.target.parentElement.querySelectorAll('p')[2].textContent //duracion
    peliculaSeleccionada.clasificacion = event.target.parentElement.querySelectorAll('p')[3].textContent //clasificacion
    peliculaSeleccionada.sinopsis = event.target.parentElement.querySelectorAll('p')[4].textContent //sinopsis
    peliculaSeleccionada.director = event.target.parentElement.querySelectorAll('p')[5].textContent //director
    peliculaSeleccionada.actores = event.target.parentElement.querySelectorAll('p')[6].textContent //actores

    console.log(peliculaSeleccionada);

    localStorage.setItem('peliculaSeleccionada', JSON.stringify(peliculaSeleccionada))

    window.location.href = '../src/views/ampliarInfoPelicula.html'


})