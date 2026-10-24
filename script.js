// Mostra os codigos incluidos no projeto
const paineisDeCodigo = document.querySelectorAll("[data-fonte]");

paineisDeCodigo.forEach(function (painel) {
    const caminho = painel.dataset.fonte;
    const codigo = window.codigosAvaliacao[caminho];

    if (codigo) {
        painel.textContent = codigo;
    } else {
        painel.textContent = "Codigo nao encontrado: " + caminho;
        console.error("Codigo nao encontrado:", caminho);
    }
});

// Copia o codigo do arquivo aberto
const botoesCopiar = document.querySelectorAll(".botao-copiar");

botoesCopiar.forEach(function (botao) {
    botao.addEventListener("click", async function () {
        const caminho = botao.dataset.copiar;
        const painel = document.querySelector('[data-fonte="' + caminho + '"]');
        const mensagem = botao.closest(".arquivo").querySelector(".mensagem-copia");

        try {
            if (!painel || !window.codigosAvaliacao[caminho]) {
                throw new Error("O codigo nao foi encontrado.");
            }
            if (!navigator.clipboard) {
                throw new Error("A copia nao esta disponivel neste navegador.");
            }

            await navigator.clipboard.writeText(painel.textContent);
            mensagem.textContent = "Codigo copiado!";
        } catch (erro) {
            mensagem.textContent = erro.message + " Selecione o texto para copiar manualmente.";
            console.error("Erro ao copiar " + caminho, erro);
        }
    });
});
