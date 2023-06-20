const submit = document.querySelector('.form-submit')

async function buscarFilmes() {
    // pegando o que foi digitado no campo de busca
    const filme = document.querySelector('.form-input').value;
    
    // verificando se o usuario digitou algo no campo
    if (filme) {
        const url = `http://www.omdbapi.com/?s=${filme}&apikey=e341acff`
        
        // realizando a reequisiçao na api
        const response = await fetch(url)
        
        // convertendo os dados da resposta para json e armazenando
        //em data
        const data = await response.json()

        let lista = ''
        // percorrendo o array com os resultados dos filmes
        for(let i = 0; i < data.Search.length; i++) {
            lista += `<li class='app-movies-card'>`;
            lista += `<figure class='app-movies-figure'>`;
            lista += `<img class='app-movies-thumb' src='${data.Search[i].Poster}'>`;
            lista += `</figure>`;
            lista += `<legend class='app-movies-legend'>`
            lista += `<span class='app-movies-ano'>${data.Search[i].Year}</span>`;
            lista += `<h2 class='app-movies_title'>${data.Search[i].Title}</h2>`;
            lista += `</legend>`
            lista += `</li>`

        } // fim do for
        
        // pegando a ul e injetanddo o html contido em lista
        const movies = document.querySelector('#movies')
        movies.innerHTML = lista

    }
}


submit.addEventListener('click', function (e) {
    e.preventDefault()
    buscarFilmes()
})