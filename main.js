'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')
    const tbody = document.getElementById('atributos')

    if (
        produto.value === "" || 
        codigo.value === "" ||
        quantidade.value === ""){
        alert('erro')
    }
    const tr = document.createElement('tr')

    tr.className= " bg-white shadow-md rounded-lg houver:shadow-lg houver:bg-gray-50 transition"

    tr.innerHTML = `
        <td class="px-4 py-2 font-semibold">${codigo.value}</td>
        <td class="px-4 py-2">${produto.value}</td>
        <td class="px-4 py-2">${quantidade.value}</td>
    `
    tbody.appendChild(tr)
}

function limparProduto(){
     const tbody = document.getElementById('atributos')
     const ultimoProduto = tbody.lastElementChild

     if(ultimoProduto){
        ultimoProduto.remove()
     }else{
        alert("Nenhum produto para excluir")
     }


}