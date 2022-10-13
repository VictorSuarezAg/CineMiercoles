export function validarSillas(asientos) {
    // validacion de asientos

    let validar = document.querySelector('.validar')

    validar.addEventListener('click', function() {
        let cont = 0,
            sillaId = []

        // Mostrar Factura
        let factura = document.querySelector('.factura')
        factura.classList.add('factura--active')

        factura.style.visibility = 'visible'

        let titleFac = document.createElement('h3'),
            dateFac = document.createElement('p'),
            datosFac = document.createElement('p'),
            cantidadFac = document.createElement('p'),
            reservaFac = document.createElement('p'),
            sillaFac = document.createElement('p'),
            idSillas = document.createElement('p'),
            subtotalFac = document.createElement('p'),
            ivaFac = document.createElement('p'),
            totalFac = document.createElement('p')

        titleFac.classList.add('titleFac')
        dateFac.classList.add('dateFac')
        datosFac.classList.add('datosFac')
        cantidadFac.classList.add('cantidadFac')
        reservaFac.classList.add('reservaFac')
        sillaFac.classList.add('sillaFac')
        idSillas.classList.add('idSillas')
        subtotalFac.classList.add('subtotalFac')
        ivaFac.classList.add('ivaFac')
        totalFac.classList.add('totalFac')

        let date = new Date().toLocaleString()

        console.log(asientos)
        asientos.forEach(function(hilera) {
            hilera.forEach(function(asiento) {
                if (asiento.estado == 1) {
                    cont = cont + 1
                    sillaId.push(asiento.id)
                    asiento.estado = 2

                    if (asiento.estado == 2) {
                        asiento.estado = 2
                    }
                    console.log(asientos);
                    // llevar asientos a localstorage

                    localStorage.setItem('asientos', JSON.stringify(asientos))
                }
            })
        })

        let vrSilla = 15000

        titleFac.textContent = 'CINEMA JS'
        dateFac.textContent = date
        datosFac.innerHTML = '<span>Qnt</span><span>Reserva</span><span>Vr Uni</span>'
        cantidadFac.textContent = cont
        reservaFac.textContent = 'Silla(s)'
        sillaFac.textContent = '$' + vrSilla
        idSillas.textContent = sillaId
        subtotalFac.innerHTML = '<span class="subtotal">Subtotal:</span> $' + (vrSilla * cont)
        ivaFac.innerHTML = '<span class="subtotal">IVA:</span> $' + (vrSilla * cont) * 0.19
        totalFac.innerHTML = '<span class="total">Total:</span> $' + (vrSilla * cont) * 1.19

        factura.appendChild(titleFac)
        factura.appendChild(dateFac)
        factura.appendChild(datosFac)
        factura.appendChild(cantidadFac)
        factura.appendChild(reservaFac)
        factura.appendChild(sillaFac)
        factura.appendChild(idSillas)
        factura.appendChild(subtotalFac)
        factura.appendChild(ivaFac)
        factura.appendChild(totalFac)
    })

    let btnPagar = document.querySelector('.btnPagar')

    btnPagar.addEventListener('click', () => {
        location.reload()
    })
}