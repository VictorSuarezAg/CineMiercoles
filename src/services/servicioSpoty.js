// Consumir datos de Api de spotify
const URI = "https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?market=US"
const TOKEN = "Bearer BQDbbPkWGvEKSvaN7AY9hjmIb4L0bcj-zZskLdwiVfclR1Atwr7tC-iRFtrM31BUM3dZja-QLldeaIs9qcBdouiOgf5rO7NeiRfBH8JPVBANcLEL1faiSlDglintOceH-Zx_9WYVksy38YTxWiRguw8UgsAvXCFSsyx9nnSnhRuejoeBETbvQhvaDqj-I2xkVIc"
const PETICION = {
    method: "GET",
    headers: {
        Authorization: TOKEN
    }
}

let fila = document.querySelector('#fila')

fetch(URI, PETICION)
    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(respuesta) {
        let canciones = respuesta.tracks;
        canciones.forEach(function(cancion) {
            console.log(cancion)
            console.log(cancion.preview_url)

            let columna = document.createElement('div')
            columna.classList.add('col-4', 'my-3')

            let tarjeta = document.createElement('div')
            tarjeta.classList.add('card', 'h-100')

            let nombre = document.createElement('h4')
            nombre.classList.add('text-center')
            nombre.textContent = cancion.name

            let audio = document.createElement('audio')
            audio.setAttribute('controls', 'controls')
            audio.src = cancion.preview_url

            tarjeta.appendChild(nombre)
            tarjeta.appendChild(audio)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
        })
    })
    .catch(function(respuesta) {
        console.log(respuesta);
    })