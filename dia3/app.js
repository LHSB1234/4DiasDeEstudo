let section = document.getElementById("resultado-pesquisa");

function pesquisar() {
    
    let resultados = '';

    for (let dado of dados) {
        resultados += `
        <div class="cards">
            <img class="icon" src="${dado.icon}">
            <h2 class="nome">${dado.nome}</h2>
            <p class="descricao">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Ver mais</a>
        </div>
        `;
    }

    section.innerHTML = resultados;
}
