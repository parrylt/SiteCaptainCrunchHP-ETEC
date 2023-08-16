const tela = document.querySelector('.tela')
let nenhumComando = false

function inserir(num) {
  if (nenhumComando) {
    clean()
    nenhumComando = false
  }

  tela.value += num
  tela.focus()
}

function clean() {
  tela.style.height = '40px'
  tela.value = ''
  tela.focus()
}

function back() {
  if (nenhumComando) {
    clean()
    nenhumComando = false
  }

  tela.value = tela.value.substring(0, tela.value.length - 1)
  tela.focus()
}

document.getElementById('form').addEventListener('click', function (event) {
  event.preventDefault()
})

function calcular() {
  let calculoInserido = document.querySelector('.tela').value

  let linesArray = calculoInserido.split(/\n+/g)

  if (linesArray.length === 2) {
    linesArray.shift()
    calculoInserido = linesArray.join('\n')
  }

  if (calculoInserido.includes('%')) {
    calculoInserido = calculoInserido.replace('%', '/100')
  }

  document.querySelector('.tela').value = eval(calculoInserido)

  if (calculoInserido) {
    tela.style.height = '80px'
    document.querySelector('.tela').value = `${calculoInserido} = \n ${eval(
      calculoInserido
    )}`
  } else {
    document.querySelector('.tela').value = 'nenhum comando...'
    nenhumComando = true
  }
  tela.focus()
}
