let sillasSeleccionadas = JSON.parse(localStorage.getItem('asientos'))

export let asientos

if (sillasSeleccionadas == null) {
    asientos = [
        [
            { id: "a1", estado: 0 },
            { id: "a2", estado: 0 },
            { id: "a3", estado: 0 },
            { id: "a4", estado: 0 },
            { id: "a5", estado: 0 },
            { id: "a6", estado: 0 }
        ],
        [
            { id: "b1", estado: 0 },
            { id: "b2", estado: 0 },
            { id: "b3", estado: 0 },
            { id: "b4", estado: 0 },
            { id: "b5", estado: 0 }
        ],
        [
            { id: "c1", estado: 0 },
            { id: "c2", estado: 0 },
            { id: "c3", estado: 0 },
            { id: "c4", estado: 0 }
        ]
    ]
} else {

    asientos = sillasSeleccionadas

}