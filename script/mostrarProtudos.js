import { conectaApi } from "./conectaApi.js";
import { excluirProduto } from "./excluiProdutos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem, id) {
    const produto = document.createElement("li");
    produto.className = "sessao__itens__itens";
    produto.innerHTML = `<div>
    <img class="sessao__itens__imagem" src="${imagem}" alt="">
    <h3 class="sessao__itens__titulo" >${nome}</h3>
    <div class="sessao__itens__valor__delete">
        <h2 class="sessao__itens__valor"> <strong>R$ ${valor}</strong></h2>
        <button>
            <a href=""><img src="./assets/excluir.png" alt="botao excluir" id="${id}" data-excluir></a>
        </button>
    </div>
</div>`

    return produto;
}


async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)))
    } catch (error) {
       lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum produto foi adicionado!</h2>` 
    }
    
}

listaProdutos();
