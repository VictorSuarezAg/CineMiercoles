export function seleccionSillas(asientos) {
    let cinema = document.querySelector('#salacinema')

    cinema.addEventListener('click', function(event) {
        if (event.target.tagName == "IMG") {
            let idAsientoSeleccionado = event.target.id
            let factura = document.querySelector('.factura')

            if (factura.classList.contains('factura--active')) {
                event.preventDefault()
            } else {
                asientos.forEach(function(hilera) {
                    hilera.forEach(function(asiento) {
                        if (asiento.id == idAsientoSeleccionado) {
                            if (asiento.estado == 0) {
                                asiento.estado = 1
                                event.target.src = '../../assets/img/chairGreen.png'
                            } else if (asiento.estado == 1) {
                                asiento.estado = 0
                                event.target.src = '../../assets/img/chair.png'
                            }
                        }
                    })
                })
            }
        }
    })
}