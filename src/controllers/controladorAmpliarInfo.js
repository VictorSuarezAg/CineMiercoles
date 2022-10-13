let datosPeliculaSeleccionada = JSON.parse(localStorage.getItem('peliculaSeleccionada'))

console.log(datosPeliculaSeleccionada);

let poster = datosPeliculaSeleccionada.poster
let nombre = datosPeliculaSeleccionada.nombre
let estreno = datosPeliculaSeleccionada.estreno
let genero = datosPeliculaSeleccionada.genero
let idioma = datosPeliculaSeleccionada.idioma
let duracion = datosPeliculaSeleccionada.duracion
let actores = datosPeliculaSeleccionada.actores
let clasificacion = datosPeliculaSeleccionada.clasificacion
let director = datosPeliculaSeleccionada.director
let sinopsis = datosPeliculaSeleccionada.sinopsis

let posterDetalle = document.querySelector('.posterDetalle')
let nombreDetalle = document.querySelector('.nombreDetalle')
let estrenoDetalle = document.querySelector('.estrenoDetalle')
let sinopsisDetalle = document.querySelector('.sinopsisDetalle')
let clasificacionDetalle = document.querySelector('.clasificacionDetalle')
let generoDetalle = document.querySelector('.generoDetalle')
let idiomaDetalle = document.querySelector('.idiomaDetalle')
let duracionDetalle = document.querySelector('.duracionDetalle')
let directorDetalle = document.querySelector('.directorDetalle')
let actoresDetalle = document.querySelector('.actoresDetalle')


posterDetalle.src = poster
nombreDetalle.textContent = nombre
estrenoDetalle.textContent = estreno
sinopsisDetalle.textContent = sinopsis
clasificacionDetalle.textContent = clasificacion
generoDetalle.textContent = genero
idiomaDetalle.textContent = idioma
duracionDetalle.textContent = duracion
directorDetalle.textContent = director
actoresDetalle.textContent = actores