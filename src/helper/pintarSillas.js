export function pintarSillas(asientos) {
    // Pintar desde js mi sala de cine
    let cinema = document.querySelector('#salacinema')

    //Recorro los asientos y aplicar traversing
    asientos.forEach(function(hilera) {
        let fila = document.createElement('div')
        fila.classList.add('row', 'my-3', 'd-flex', 'justify-content-center')

        hilera.forEach(function(asiento) {
            let columna = document.createElement('div')
            columna.classList.add('col-2')

            let fotoSilla = document.createElement('img')
            fotoSilla.classList.add('img-fluid', 'w-100', 'silla')
            fotoSilla.setAttribute('id', asiento.id)

            if (asiento.estado == 0) {
                fotoSilla.src = '../../assets/img/chair.png'
            } else if (asiento.estado == 2) {
                fotoSilla.src = '../../assets/img/chairRed.png'
            }

            columna.appendChild(fotoSilla)
            fila.appendChild(columna)
        })

        cinema.appendChild(fila)
    })
    let validar = document.createElement('button')
    validar.classList.add('btn', 'btn-primary', 'my-5', 'validar')
    validar.textContent = 'VALIDAR RESERVA'
    cinema.appendChild(validar)
}