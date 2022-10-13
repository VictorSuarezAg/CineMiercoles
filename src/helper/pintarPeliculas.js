export function pintarPeliculas(peliculas) {
    let fila = document.querySelector('#fila')

    peliculas.forEach(function(pelicula) {
        let columna = document.createElement('div'),
            tarjeta = document.createElement('div'),
            poster = document.createElement('img'),
            tarjetaBody = document.createElement('div'),
            nombre = document.createElement('h5'),
            sinopsis = document.createElement('p'),
            genero = document.createElement('p'),
            idioma = document.createElement('p'),
            duracion = document.createElement('p'),
            clasificacion = document.createElement('p'),
            director = document.createElement('p'),
            actores = document.createElement('p')

        columna.classList.add('col')
        tarjeta.classList.add('card', 'h100')
        poster.classList.add('card-img-top')
        tarjetaBody.classList.add('card-body')
        nombre.classList.add('card-title', 'nombre')
        sinopsis.classList.add('card-text', 'sinopsis')
        genero.classList.add('card-text', 'mb-1', 'genero')
        idioma.classList.add('card-text', 'mb-1', 'idioma')
        duracion.classList.add('card-text', 'mb-1', 'duracion')
        clasificacion.classList.add('card-text', 'mb-1', 'clasificacion')
        director.classList.add('card-text', 'mb-1', 'director')
        actores.classList.add('card-text', 'mb1', 'actores')

        poster.src = pelicula.poster
        nombre.textContent = pelicula.nombre
        sinopsis.innerHTML = '<strong>Sinopsis:</strong> ' + pelicula.sinopsis
        genero.innerHTML = '<strong>Genero:</strong> ' + pelicula.genero
        idioma.innerHTML = '<strong>Idioma:</strong> ' + pelicula.idioma
        duracion.innerHTML = '<strong>Duración:</strong> ' + pelicula.duracion + 'min'
        clasificacion.innerHTML = '<strong>Clasificación:</strong> ' + pelicula.clasificacion
        director.innerHTML = '<strong>Director:</strong> ' + pelicula.director
        actores.innerHTML = '<strong>Actores:</strong> ' + pelicula.actores.actor1 + ', ' + pelicula.actores.actor2 + ', ' + pelicula.actores.actor3

        fila.appendChild(columna)
        columna.appendChild(tarjeta)
        tarjeta.appendChild(poster)
        tarjeta.appendChild(tarjetaBody)
        tarjetaBody.appendChild(nombre)
        tarjetaBody.appendChild(genero)
        tarjetaBody.appendChild(idioma)
        tarjetaBody.appendChild(duracion)
        tarjetaBody.appendChild(clasificacion)
        tarjetaBody.appendChild(sinopsis)
        tarjetaBody.appendChild(director)
        tarjetaBody.appendChild(actores)
    })
}