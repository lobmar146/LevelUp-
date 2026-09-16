function iniciarJuego() {
  alert('Bienvenido al piedra, papel o tijera de Front 2 :D')

  let nombre

  do {
    nombre = prompt('Ingrese su nombre por favor: ')
  } while (!validarNombre(nombre))

  alert('Gracias por jugar ' + nombre + '. Mucha suerte')
  console.log('El jugador es: ' + nombre)
  return nombre.toLocaleUpperCase()
}

function pedirJugada() {
  let eleccion = 0
  //1 piedra, 2 papel, 3 para tijera
  do {
    eleccion = parseInt(
      prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')
    )
  } while (!validarJugada(eleccion))
  return eleccion
}

function jugadaRandom() {
  let numero = parseInt(Math.random() * 3 + 1)
  return numero
}

function compararJugadas() {
  //1 piedra, 2 papel, 3 para tijera
  const resultadosPosibles = [
    'Gana el jugador 👶🏻', //Posicion 0 gano
    'Empate 🫱🏻🫲🏻', //posicion 1 empate
    'Gana la PC 🤖' // posicion 2 gana pc
  ]
  const eleccionJugador = pedirJugada()
  const eleccionComputadora = jugadaRandom()
  console.log('Jugada de la PC: ' + eleccionComputadora)

  if (eleccionJugador == eleccionComputadora) {
    return resultadosPosibles[1]
  } else if (
    (eleccionJugador == 1 && eleccionComputadora == 3) ||
    (eleccionJugador == 2 && eleccionComputadora == 1) ||
    (eleccionJugador == 3 && eleccionComputadora == 2)
  ) {
    return resultadosPosibles[0]
  }
  return resultadosPosibles[2]
}

function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
}

function mostrarResultado(resultadoPartida) {
  console.log(resultadoPartida)
  alert(resultadoPartida)
  if (resultadoPartida == 'Gana la PC 🤖') {
    alert('¡Ánimo! Mucha suerte en la próxima oportunidad.')
  }
}

const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
mostrarResultado(compararJugadas())
