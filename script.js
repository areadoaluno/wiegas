// Carrega os arquivos de exemplo nos paineis de codigo
const paineisDeCodigo = document.querySelectorAll("[data-fonte]");

paineisDeCodigo.forEach(function (painel) {
    fetch(painel.dataset.fonte)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Erro ao carregar o arquivo.");
            }
            return resposta.text();
        })
        .then(function (codigo) {
            painel.textContent = codigo;
        })
        .catch(function (erro) {
            painel.textContent = "Nao foi possivel carregar. Acesse o site publicado ou use um servidor local.";
            console.error("Erro no arquivo " + painel.dataset.fonte, erro);
        });
});

// Copia o codigo do arquivo aberto
const botoesCopiar = document.querySelectorAll(".botao-copiar");

botoesCopiar.forEach(function (botao) {
    botao.addEventListener("click", async function () {
        const caminho = botao.dataset.copiar;
        const painel = document.querySelector('[data-fonte="' + caminho + '"]');
        const mensagem = botao.closest(".arquivo").querySelector(".mensagem-copia");

        try {
            if (!painel || painel.textContent.startsWith("Nao foi possivel")) {
                throw new Error("O codigo ainda nao esta disponivel.");
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
