function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite o nome no campo de busca.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    for (let porsche of porsches) {
        let titulo = porsche.titulo.toLowerCase();
        let descricao = porsche.descricao.toLowerCase();
        let tags = porsche.tags.toLowerCase();

        // Verifica se o termo de pesquisa está no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${porsche.link}" target="_blank">${porsche.titulo}</a></h2>
                    <img src="${porsche.imagem}" alt="${porsche.titulo}" class="imagem-modelo" />
                    <p class="descricao-meta">${porsche.descricao}</p>
                    <p class="tags-meta">${porsche.tags.split(" ").map(tag => `<span class="tag">${tag}</span>`).join(" ")}</p>
                    <a href="${porsche.link}" target="_blank">Mais informações</a>
                </div>`;
        }
    }

    // Caso nenhum resultado seja encontrado
    if (resultados === "") {
        resultados = "<p>Nenhum resultado encontrado para a pesquisa.</p>";
    }

    section.innerHTML = resultados;
}
