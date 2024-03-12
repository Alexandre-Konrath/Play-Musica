const botaoPlauPouse = document.getElementById("play-pause")
const audioCapitulo = document.getElementById("audio-capitulo")
const botaoAvancar = document.getElementById("proximo")
const botaoVoltar = document.getElementById("anterior")
const nomeCapitulo = document.getElementById("capitulo")

let numeroDeCapitulos = 10
let tocando = 0
let capituloAtual = 1

function tocarFaixa() {
  audioCapitulo.play()
  botaoPlauPouse.classList.remove("fa-circle-play")
  botaoPlauPouse.classList.add("fa-circle-pause")
}

function pausarFaixa() {
  audioCapitulo.pause()
  botaoPlauPouse.classList.remove("fa-circle-pause")
  botaoPlauPouse.classList.add("fa-circle-play")
}

function tocarOuPausar() {
  if (tocando === 0) {
    tocarFaixa();
    tocando = 1
  } else {
    pausarFaixa();
    tocando = 0
  }
}

function proximaFaixa() {
  if (capituloAtual === numeroDeCapitulos) {
    capituloAtual = 1
  } else {
    capituloAtual = capituloAtual + 1
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"

  trocarNomeFaixa()
  tocarFaixa()
  tocando = 1
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = 'capitulo  ' + capituloAtual
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroDeCapitulos
  } else {
    capituloAtual = capituloAtual - 1
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"

  trocarNomeFaixa()
  tocarFaixa()
  tocando = 1
}

botaoPlauPouse.addEventListener("click", tocarOuPausar)
botaoAvancar.addEventListener("click", proximaFaixa)
botaoVoltar.addEventListener("click", voltarFaixa)
