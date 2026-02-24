'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')

    const span = document.createElement('span')
    span.textContent = produto.value

    lista.appendChild(span)
    span.className = " flex flex col bg-yellow-100 px8 py-2" 

    produto.value = ''
    
}