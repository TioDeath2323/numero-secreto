let numeroSorteado = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAlea();
let tentativas = 1;


function exibirTextoTi(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagem() {
    exibirTextoTi('h1', 'Jogo do número secreto');
    exibirTextoTi('p', 'Escolha um número entre 1 e 10');
}

exibirMensagem();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == NumeroSecreto)
         {
        exibirTextoTi('h1', 'Acertou!!!');
        let tentaviva = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemtentativa = `Você concluiu o desafio com ${tentativas} ${tentaviva}!!`;
        exibirTextoTi('p', mensagemtentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    if(chute > NumeroSecreto) {
        exibirTextoTi('p', 'Você deve escolher um número menor!!!');
    } else{
        exibirTextoTi('p', 'Você deve escolher um número maior!!!');
    }
    tentativas++;
    limparcampo();
    }

}

function gerarNumeroAlea() {
   numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);  
   let elementosNaLista = numeroSorteado.length;

   if (elementosNaLista == numeroLimite) {
    numeroSorteado = [];
   }

   if(numeroSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAlea();
   } else {
    numeroSorteado.push(numeroEscolhido);
    console.log(numeroSorteado);
    return numeroEscolhido;
   }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    NumeroSecreto = gerarNumeroAlea();
    limparcampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}