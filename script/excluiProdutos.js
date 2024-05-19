import { conectaApi } from "./conectaApi.js";

const botoesExcluir = document.querySelectorAll("[data-excluir]");

async function excluirProduto(idProduto) {
    try {
        await conectaApi.excluirProduto(idProduto);
        alert ("Produto excluido com sucesso!");
    } catch(error) {
        console.error("Erro ao excluir protuto", error);
        alert(e);
    }

}

botoesExcluir.forEach(botao => {
    botao.addEventListener("click", () => {
        const idDoProduto = botao.dataset.idProduto;
        excluirProduto(idDoProduto);
    })
})

export { excluirProduto };
