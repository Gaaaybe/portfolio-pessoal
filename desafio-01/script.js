const table = document.querySelector('.tabela-resultados');

function criaTabela(reps){
    reps.forEach((repositorio) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${repositorio.name}</td>
            <td><a href="${repositorio.html_url}" target="_blank">LINK</a></td>
            <td><img src="${repositorio.owner.avatar_url}" alt="Avatar" width="50" height="50"></td>
        `;
        table.appendChild(linha);
    });
};

async function getAPI(){
    try{
        const resposta = await fetch('https://api.github.com/orgs/google/repos');
        if(!resposta.ok){
            throw new Error('Erro ao buscar os repositórios: ', resposta.status);
        };

        const repositoriosJson = await resposta.json();
        criaTabela(repositoriosJson);

    } catch(error){
        console.error('Erro ao buscar os repositórios: ', error);
    }
};

getAPI();