// Consumir datos de Api de spotify
const URI = "https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?market=US"
const TOKEN = "Bearer BQDhCQv8BGkxEqk1LE1HIsp1W4zHMO5vnKgVu3R7RGhIr9yn7iq5mszsQwpG0Jqh3uSP5Invrs_mhknpKhL4w2C4nvOpv4GUQFGZBW7j2ILAzKtrzhRZGOEV1YbX4gHmlE6sljD9gAHUCBJImS7XBODRI6QdnDSaPUqZB9SegNNYIqizlwyLTfuyjLEaXgT9dT0"
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