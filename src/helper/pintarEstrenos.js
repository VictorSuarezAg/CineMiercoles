export function pintarEstrenos(estrenos) {
    let fila2 = document.querySelector('#fila2')

    estrenos.forEach(function(nuevas) {
        let columna = document.createElement('div'),
            tarjeta = document.createElement('div'),
            poster = document.createElement('img'),
            tarjetaBody = document.createElement('div'),
            nombre = document.createElement('h5'),
            estreno = document.createElement('p'),
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
        estreno.classList.add('card-text', 'estreno', 'mb-1')
        sinopsis.classList.add('card-text', 'sinopsis')
        genero.classList.add('card-text', 'mb-1', 'genero')
        idioma.classList.add('card-text', 'mb-1', 'idioma')
        duracion.classList.add('card-text', 'mb-1', 'duracion')
        clasificacion.classList.add('card-text', 'mb-1', 'clasificacion')
        director.classList.add('card-text', 'mb-1', 'director')
        actores.classList.add('card-text', 'mb1', 'actores')

        poster.src = nuevas.poster
        nombre.textContent = nuevas.nombre
        estreno.innerHTML = '<strong>Estreno:</strong> ' + nuevas.estreno
        sinopsis.innerHTML = '<strong>Sinopsis:</strong> ' + nuevas.sinopsis
        genero.innerHTML = '<strong>Genero:</strong> ' + nuevas.genero
        idioma.innerHTML = '<strong>Idioma:</strong> ' + nuevas.idioma
        duracion.innerHTML = '<strong>Duración:</strong> ' + nuevas.duracion + 'min'
        clasificacion.innerHTML = '<strong>Clasificación:</strong> ' + nuevas.clasificacion
        director.innerHTML = '<strong>Director:</strong> ' + nuevas.director
        actores.innerHTML = '<strong>Actores:</strong> ' + nuevas.actores.actor1 + ', ' + nuevas.actores.actor2 + ', ' + nuevas.actores.actor3

        fila2.appendChild(columna)
        columna.appendChild(tarjeta)
        tarjeta.appendChild(poster)
        tarjeta.appendChild(tarjetaBody)
        tarjetaBody.appendChild(nombre)
        tarjetaBody.appendChild(estreno)
        tarjetaBody.appendChild(genero)
        tarjetaBody.appendChild(idioma)
        tarjetaBody.appendChild(duracion)
        tarjetaBody.appendChild(clasificacion)
        tarjetaBody.appendChild(sinopsis)
        tarjetaBody.appendChild(director)
        tarjetaBody.appendChild(actores)
    })
}