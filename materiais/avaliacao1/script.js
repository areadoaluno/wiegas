// Escreve o subtitulo letra por letra
const texto = "Um pouco sobre mim...";
let indice = 0;
const subtitulo = document.getElementById("subtitulo");

function escreverTexto() {
    if (indice < texto.length) {
        subtitulo.textContent += texto[indice];
        indice++;
        setTimeout(escreverTexto, 100);
    }
}

escreverTexto();
