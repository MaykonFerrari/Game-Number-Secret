let listaNumerosSorteados = [];
let quantidadeNumeroSecreto = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagem(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1})
}

function exibirMensagemInicial(){
exibirMensagem("h1", "Jogo do número secreto");
exibirMensagem("p", "Escolha um número entre 1 e 100.");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirMensagem("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabens. Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirMensagem("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirMensagem("p", "O número secreto é menor!");
        } else {
            exibirMensagem("p", "O número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeNumeroSecreto + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosLista == quantidadeDeElementosLista) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}