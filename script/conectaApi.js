// json-server --watch db.json



async function listaProdutos () {
    const conexao = await fetch("http://localhost:3000/produtos"); // servidor criado pelo comando: json-server --watch bd.joson  (Endpoints: http://localhost:3000/videos)
    const conexaoConvertida = await conexao.json(); // Convertendo os dados recebidos em um objeto JSON

    return conexaoConvertida;
}

async function criarProduto(nome, valor, imagem, id) {
    const conexao =  await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            id: id
        })
    });

    if (!conexao.ok) { // se conexao nao estiver ok -- para exibir na tela arquivo criarProduto.js foi acrescentado no codigo "try" e "catch" 
        throw new Error ("Não foi possível cadastrar o produto!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}




async function excluirProduto(idProduto) {
    try {
        const conexao = await fetch(`http://localhost:3000/produtos/${idProduto}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data); 
        alert ("data");
    } catch (error) { 
        console.error("Erro ao deletar produto:", error);
        throw error;
    }  
}




async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaProdutos,
    criarProduto, 
    buscaProduto,
    excluirProduto
}
