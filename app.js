function pesquisarAtleta(){
    
    let nome = document.querySelector("#nome-atleta").value;
    let section = document.querySelector("#resultados-pesquisa");
    let resultados = '';

    let nomeCaps = "";
    let endereco = "";
    let bairro = "";
    let contato = "";
    
    for (let dado of dados){

        nomeCaps = dado.nome.toLowerCase();
        endereco = dado.endereco.toLowerCase();
        bairro = dado.bairro.toLowerCase();
        contato = dado.contato.toLowerCase();

        if (!nome){
            return section.innerHTML = "Digite algo para ser pesquisado!";
        }

        if (nomeCaps.includes(nome) || endereco.includes(nome) || bairro.includes(nome) || contato.includes(nome)){
            resultados += `
                            <div class="item-resultado">
                                <h2> 
                                    <a href="#">
                                        ${dado.nome}
                                    </a>
                                </h2>
                        
                                <p class="descricao-meta"><strong>Endereco</strong>:  ${dado.endereco}</p>
                                <p class="descricao-meta"><strong>Bairro</strong>:  ${dado.bairro}</p>
                                <p class="descricao-meta"><strong>Cidade</strong>:  ${dado.cidade}</p>
                                <p class="descricao-meta"><strong>Estado</strong>:  ${dado.estado}</p>
                                <p class="descricao-meta"><strong>Contato</strong>:  ${dado.contato}</p>
                                <p class="descricao-meta"><strong>E-mail</strong>:  ${dado.email}</p>
                                
                            </div>
            `;
        }
        
        if (!resultados){           
            section.innerHTML = `Nada foi encontrado para <strong>${nome}</strong>!`;
        }

    };

    section.innerHTML = resultados;
    document.querySelector("#nome-atleta").value = "";

}
