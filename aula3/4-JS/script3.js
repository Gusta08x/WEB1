let numeroSecreto;
let vidas;

let txtstatus = document.getElementById("status");
let btnIniciar = document.getElementById("btIniciar");
let numeroChute = document.getElementById("num1");
let btnChutar = document.getElementById("btChutar");
let resultado = document.getElementById("txtResultado");

btnIniciar.addEventListener("click", novoJogo);
btnChutar.addEventListener("click", chutar);

numeroChute.disabled = true;
btnChutar.disabled = true;

numeroChute.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        chutar();
    }
});

function novoJogo() {
    numeroChute.disabled = false;
    btnChutar.disabled = false;
    numeroSecreto = parseInt(Math.random() * 100) + 1;
    vidas = 10;
    numVidas()
    numeroChute.value = "";
    resultado.innerHTML = "";
    numeroChute.focus();
}
function numVidas() {
    txtstatus.innerHTML = "";
    for (let i = 1; i <= vidas; i++) {
        txtstatus.innerHTML += '+ ';
    }
    if (vidas == 0) {
        resultado.innerHTML += "Você perdeu!";
        numeroChute.disabled = true;
        btnChutar.disabled = true;
    }
}
function chutar() {
    let num = numeroChute.value;
    if (num < 1 || num > 100) {
        alert("O número tem que ser entre 1 e 100! Perdeu uma vida!");
        vidas--;
    } else if (num == numeroSecreto) {
        resultado.innerHTML += "Parabéns, você acertou!"
    } else if (num > numeroSecreto) {
        resultado.innerHTML += "Palpite: = " + num;
        resultado.innerHTML += " - O número é menor! <br>";
        vidas--;
    } else if (num < numeroSecreto) {
        resultado.innerHTML += "Palpite: = " + num;
        resultado.innerHTML += " - O número é maior! <br>";
        vidas--;
    }
    numeroChute.value = "";
    numeroChute.focus();
    numVidas();
}