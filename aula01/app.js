'use strict'


/* const calcular = document.getElementById('calcular')


function somar() {
    
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number( document.getElementById('numero2').value)
    const resultadoConta = document.getElementById('resultadoConta')
    const formulario = document.getElementById('formulario')
    
    resultadoConta.value = numero1 + numero2
    formulario.classList.add('sombra-azul')    

    
}


calcular.addEventListener('click', somar) */

const calcular = document.getElementById('calcular')

function calcularMedia() {

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const inputNota1 = document.getElementById('nota1')
    const inputNota2 = document.getElementById('nota2')
    const situacaoAluno = document.getElementById('situacao')
    const formulario = document.getElementById('formulario')

    situacaoAluno.value = (nota1 + nota2) / 2

    if (situacaoAluno.value < 5) {
        situacaoAluno.value = 'Reprovado'
        formulario.classList.remove('aprovado')
        formulario.classList.add('reprovado')
    }

    if (situacaoAluno.value > 5) {

        situacaoAluno.value = 'Aprovado'
        formulario.classList.remove('reprovado')
        formulario.classList.add('aprovado')

    }

    if(nota1 < 5){
        inputNota1.classList.remove('nota-azul')
        inputNota1.classList.add('nota-vermelha')
    }

    if(nota2 > 5){
        inputNota2.classList.remove('nota-vermelha')
        inputNota2.classList.add('nota-azul')
    }

}

calcular.addEventListener('click', calcularMedia)