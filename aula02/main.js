'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

const adicionarCard = (nome, nota) =>{
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__nome">${nome}</h2>
                        <span class="aluno__nota">${nota}</span>`

    if(nota == "" || nome == "" || nome == null ||nota == null){
        alert('Todos campos devem ser preenchidos')
    } else if(nota > 10 || nota < 0){
        alert('A nota deve ser entre 0 e 10.')
    }
    else if(nota >= 7){
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('green')
        container.appendChild(novaDiv)
    } else if(nota < 7){
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('red')
        container.appendChild(novaDiv)
    } else if(isNaN(nota)){
        alert('Não é possível digitar letras na nota')
    } else{
        container.appendChild(novaDiv)
    }
    

}
const handleClick = () =>{
    const nome = prompt('Digite o nome do Aluno')
    const nota = prompt('Digite a nota do Aluno')
    const novaDiv = document.createElement('div')
    
    adicionarCard(nome, nota)
} 

adicionar.addEventListener('click', handleClick)