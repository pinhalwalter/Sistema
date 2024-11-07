const urlBase = 'https://backend-lp2-mauve.vercel.app/produtos';
//const urlBase = 'http://localhost:4000/produtos';

export async function gravarProduto(produto){
    const resposta = await fetch(urlBase,{
        'method':"POST",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(produto)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarProduto(produto){
    const resposta = await fetch(urlBase+"/"+produto.codigo,{
        'method':"PATCH",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(produto)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function serviceExcluirProduto(produto){
    const resposta = await fetch(urlBase+"/"+produto.codigo,{
        'method':"DELETE",
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function consultarProduto() {
    const resposta = await fetch(urlBase,{
        'method':"GET"
    });
    const resultado = await resposta.json();
    return resultado;
}