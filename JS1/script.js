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
    // Limpar o catálogo antes de exibir os filmes
    let conteudo = "";
    if (lista.length === 0) {
        // Se não tiver filme encontrado
        catalogo.innerHTML = "<p>Nenhum filme encontrado.</p>";
    } else {
        for (let i = 0; i < lista.length; i++) {
            conteudo += `
            <div class="filme">
                <button onclick="favoritar(${filmes.indexOf(lista[i])})">♥ Favoritar</button><br>
                <img src="${lista[i].poster}" alt="Pôster de ${lista[i].titulo}">
                <h3>${lista[i].titulo}</h3>
                <p>Ano: ${lista[i].ano}</p>
                <p>Gênero: ${lista[i].genero}</p>
                <p>Nota: ${lista[i].nota}</p>
                ${lista[i].nota >= 8 ? '<p class="recomendado">⭐ Recomendado</p>' : ""}
            </div>
        `;
        }
    }
    catalogo.innerHTML = conteudo;
    contador.innerHTML = lista.length;
}
mostrarFilmes(filmes);
// Campo para buscar filmes
let busca = document.getElementById("busca");
// Executa a busca quando o usuário digitar
busca.addEventListener("input", function () {
    // Converte texto para letras minúsculas
    let texto = busca.value.toLowerCase();
    let resultado = [];
    for (let i = 0; i < filmes.length; i++) {
        // Procura o texto no titulo do filme
        if (filmes[i].titulo.toLowerCase().includes(texto)) {
            resultado.push(filmes[i]);
        }
    }
    mostrarFilmes(resultado);
});
// Filtro por gênero
let filtroGenero = document.getElementById("filtro-genero");
filtroGenero.addEventListener("change", function () {
    let generoEscolhido = filtroGenero.value;
    let resultado = [];
    // Se filtar por "Todos", exibe todos os filmes
    if (generoEscolhido === "Todos") {
        resultado = filmes;
    // Filmes de Ação
    } else if (generoEscolhido === "Ação") {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === "Ação") {
                resultado.push(filmes[i]);
            }
        }
    // Filmes de Comédia
    } else if (generoEscolhido === "Comédia") {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === "Comédia") {
                resultado.push(filmes[i]);
            }
        }
    // Filmes de Ficção científica
    } else if (generoEscolhido === "Ficção científica") {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === "Ficção científica") {
                resultado.push(filmes[i]);
            }
        }
    // Filmes de Aventura
    } else if (generoEscolhido === "Aventura") {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === "Aventura") {
                resultado.push(filmes[i]);
            }
        }
    // Filmes de Drama 
    } else if (generoEscolhido === "Drama") {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === "Drama") {
                resultado.push(filmes[i]);
            }
        }
    // Filmes de Guerra
    } else if (generoEscolhido === "Guerra") {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === "Guerra") {
                resultado.push(filmes[i]);
            }
        }
    }
    mostrarFilmes(resultado);
});
// Inverter Ordem do catálogo
let btnInverter = document.getElementById("btInverter");
btnInverter.addEventListener("click", function() {
    filmes.reverse();
    mostrarFilmes(filmes);
});
// Lista de Filmes Favoritos
let favoritos = [];
// Função para Favoritar um Filme
function favoritar(indice) {
    let titulo = filmes[indice].titulo;
    if (!favoritos.includes(titulo)) {
        favoritos.push(titulo);
    }
    mostrarFavoritos();
}
// Mostrar Filmes Favoritos
function mostrarFavoritos() {
    let contadorFavoritos = document.getElementById("contador-favoritos");
    let listaFavoritos = document.getElementById("lista-favoritos");
    contadorFavoritos.innerHTML = favoritos.length;
    listaFavoritos.innerHTML = "";
    for (let i = 0; i < favoritos.length; i++) {
        listaFavoritos.innerHTML += `<li>${favoritos[i]}</li>`;
    }
}
// Botão para Limpar Favoritos
let btnLimparFavoritos = document.getElementById("btLimparFavoritos");
btnLimparFavoritos.addEventListener("click", function () {
    favoritos = [];
    mostrarFavoritos();
});
// Interação com Mouse
let tituloCatalogo = document.getElementById("titulo-catalogo");
let tituloDestaque = document.getElementById("titulo-destaque");
function interacaoMouse(titulo) {
    titulo.addEventListener("mouseenter", function () {
        titulo.style.backgroundColor = "#FFB900";
        titulo.style.color = "#333333";
    });
    titulo.addEventListener("mouseout", function () {
        titulo.style.backgroundColor = "";
        titulo.style.color = "";
    });
}
interacaoMouse(tituloCatalogo);
interacaoMouse(tituloDestaque);