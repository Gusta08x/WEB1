// Array com os filmes do catálogo
let filmes = [
    {
        titulo: "Velozes e Furiosos 5: Operação Rio",
        ano: 2011,
        genero: "Ação",
        nota: 7.3,
        poster: "assets/filme1.jpg"
    },
    {
        titulo: "Vingadores: Guerra Infinita",
        ano: 2018,
        genero: "Ação",
        nota: 8.4,
        poster: "assets/filme2.jpg"
    },
    {
        titulo: "Anjos da Lei",
        ano: 2012,
        genero: "Comédia",
        nota: 7.2,
        poster: "assets/filme3.jpg"
    },
    {
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        nota: 8.7,
        poster: "assets/filme4.png"
    },
    {
        titulo: "Um Filme Minecraft",
        ano: 2025,
        genero: "Aventura",
        nota: 5.6,
        poster: "assets/filme5.jpg"
    },
    {
        titulo: "Coringa",
        ano: 2019,
        genero: "Drama",
        nota: 8.3,
        poster: "assets/filme6.jpg"
    },
    {
        titulo: "Ford vs Ferrari",
        ano: 2019,
        genero: "Drama",
        nota: 8.1,
        poster: "assets/filme7.jpg"
    },
    {
        titulo: "Até o Último Homem",
        ano: 2016,
        genero: "Guerra",
        nota: 8.1,
        poster: "assets/filme8.jpg"
    },
    {
        titulo: "Corações de Ferro",
        ano: 2014,
        genero: "Guerra",
        nota: 7.6,
        poster: "assets/filme9.jpg"
    }
];
// Exibir os filmes no catálogo
function mostrarFilmes(lista) {
    let catalogo = document.getElementById("lista-filmes");
    let contador = document.getElementById("contador");
    catalogo.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        catalogo.innerHTML += `
            <div class="filme">
                <img src="${lista[i].poster}" alt="Pôster de ${lista[i].titulo}">
                <h3>${lista[i].titulo}</h3>
                <p>Ano: ${lista[i].ano}</p>
                <p>Gênero: ${lista[i].genero}</p>
                <p>Nota: ${lista[i].nota}</p>
                ${lista[i].nota >= 8 ? '<p class="recomendado">⭐ Recomendado</p>' : ""}
            </div>
        `;
    }
    contador.innerHTML = lista.length;
}
mostrarFilmes(filmes);