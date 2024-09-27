let section = document.getElementById("resultado-pesquisa");

function pesquisar() {
    let input = document.querySelector('input').value.toLowerCase();
    let resultados = '';

    for (let dado of dados) {
        if (dado.nome.toLowerCase().includes(input)) {
            resultados += `
            <div class="cards">
                <img class="icon" src="${dado.icon}">
                <h2 class="nome">${dado.nome}</h2>
                <p class="descricao">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Ver mais</a>
            </div>
            `;
        }
    }

    if (resultados === '') {
        resultados = '<p>Nenhum personagem encontrado.</p>';
    }

    section.innerHTML = resultados;
}
