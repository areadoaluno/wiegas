const texto = "Um Pouco Sobre Mim...";
let caractereIndex = 0;

function digitarEfeito() {
    const elementoSubtitulo = document.getElementById("subtitulo");
    
    if (caractereIndex < texto.length) {
        elementoSubtitulo.textContent += texto.charAt(caractereIndex);
        caractereIndex++;
        setTimeout(digitarEfeito, 100);
    }
}

function copiarCodigo(idDoElemento, botaoClicado) {
    const codigoElemento = document.getElementById(idDoElemento);
    
    navigator.clipboard.writeText(codigoElemento.textContent).then(() => {
        botaoClicado.textContent = "Copiado!";
        botaoClicado.style.backgroundColor = "#e8f5e9";
        botaoClicado.style.color = "#43a047";
        
        setTimeout(() => {
            botaoClicado.textContent = "Copiar";
            botaoClicado.style.backgroundColor = "#e3f2fd";
            botaoClicado.style.color = "#1e88e5";
        }, 2000);
    });
}

window.onload = digitarEfeito;
