'use strict'

const mapa = document.querySelector('svg')

const getEstados = function(event){
    const estado = event.target.id.replace('BR-', '')
    console.log(estado)
}

mapa.addEventListener('click', getEstados)

console.log(mapa)