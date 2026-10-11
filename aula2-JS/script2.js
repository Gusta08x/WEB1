function calcular() {
    let n1 = Number (document.getElementById("num1").value);
    let n2 = Number (document.getElementById("num2").value);
    let texto = document.getElementById("txtResultados");
    texto.innerText = "Soma: " +(n1 + n2);
    //Barra invertida (\) é usada para quebrar a linha no texto
    texto.innerText += "\nSubtração: " +(n1 - n2);
    texto.innerText += "\nDivisão: " +(n1 / n2);
    texto.innerText += "\nMultiplicação: " +(n1 * n2);
    texto.innerText += "\nPotência: " +(n1 ** n2);
    texto.innerText += "\nResto Divisão: " +(n1 % n2);
}