export const moduleApi ={
    /* Pesquisa ID */

    pesquisaID: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },
 
    /* Quadrinho DM */
    adicionarQuadrinho: async(edicao:string,colecao:string,lancamento:string,imagemCapa:string, editora:string, uploadedBy:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            edicao,
            colecao,
            lancamento,
            imagemCapa,
            editora,
            uploadedBy,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    alteraQuadrinho: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },
    removeQuadrinho: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },

    /*Editora DM*/
}