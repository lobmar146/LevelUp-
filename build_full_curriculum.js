const fs = require('fs')
const { execSync } = require('child_process')

// 1. Get original 8 stages from git HEAD
const originalIndex = execSync('git show HEAD:index.html', {
  maxBuffer: 15 * 1024 * 1024,
  encoding: 'utf8'
})
const startStagesIdx = originalIndex.indexOf('const stages = [')
const endStagesIdx = originalIndex.indexOf(
  '\n      let stageIndex = 0,',
  startStagesIdx
)
const originalStagesCode = originalIndex.substring(
  startStagesIdx + 'const stages = '.length,
  endStagesIdx
)
const stages1To8 = eval(originalStagesCode)

console.log(
  'Original stages 1-8 loaded successfully. Count:',
  stages1To8.length
)

// 2. Define stages 9, 10, 11
const newStages = [
  {
    title: 'Entrada y validaciones (Front 2)',
    description:
      'Prepará las funciones de bienvenida y validación de jugadas de la cátedra.',
    recap:
      'En esta segunda parte construimos el juego canónico de clase. validarNombre(nombre) ya está resuelto y verifica que el texto no sea null, ni vacío, tenga al menos 3 caracteres y no sea numérico (!isNaN). validarJugada(eleccion) verifica que sea número entero entre 1 y 3.',
    syntax:
      "function validarNombre(nombre) {\n  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {\n    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres');\n    return false;\n  }\n  return true;\n}",
    exercises: [
      {
        title: 'Construir iniciarJuego()',
        intro:
          'A partir de validarNombre provisto, encapsulá la bienvenida y solicitud de nombre en iniciarJuego.',
        steps: [
          'La plantilla contiene la función validarNombre(nombre) ya lista.',
          'Completá iniciarJuego(): mostrá alert("Bienvenido al piedra, papel o tijera de Front 2 :D").',
          'Usá un bucle do...while con prompt("Ingrese su nombre por favor: ") y repetí mientras !validarNombre(nombre).',
          'Al salir, mostrá alert("Gracias por jugar " + nombre + ". Mucha suerte") y console.log("El jugador es: " + nombre).',
          'Retorná el nombre en mayúsculas con return nombre.toLocaleUpperCase().',
          'Invocá iniciarJuego() fuera de la función.'
        ],
        example:
          'Alerta de bienvenida → Ingreso: "ana" → Alerta de gracias → Consola: "El jugador es: ana" → Retorno: "ANA"',
        hint: 'nombre.toLocaleUpperCase() convierte el texto a mayúsculas respetando las reglas del idioma.',
        starter:
          "/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n// Funcion que valida el nombre\nfunction validarNombre(nombre) {\n  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {\n    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres');\n    return false;\n  }\n  return true;\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 1                                 */\n/* -------------------------------------------------------------------------- */\nfunction iniciarJuego() {\n  // 1. Alerta de bienvenida\n  // 2. do...while con prompt y !validarNombre(nombre)\n  // 3. Alerta de agradecimiento y console.log\n  // 4. Retorno en mayúsculas\n}\n\niniciarJuego();\n",
        solution:
          "/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n// Funcion que valida el nombre\nfunction validarNombre(nombre) {\n  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {\n    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres');\n    return false;\n  }\n  return true;\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 1                                 */\n/* -------------------------------------------------------------------------- */\nfunction iniciarJuego() {\n  alert('Bienvenido al piedra, papel o tijera de Front 2 :D');\n  let nombre;\n  do {\n    nombre = prompt('Ingrese su nombre por favor: ');\n  } while (!validarNombre(nombre));\n  alert('Gracias por jugar ' + nombre + '. Mucha suerte');\n  console.log('El jugador es: ' + nombre);\n  return nombre.toLocaleUpperCase();\n}\n\niniciarJuego();",
        explanation:
          'iniciarJuego() cumple el rol de bienvenida y registro. Deja listo el nombre en mayúsculas para el resto del programa.',
        gameLink:
          'Será la primera instrucción en ejecutarse al comenzar la partida.'
      },
      {
        title: 'Construir validarJugada()',
        intro:
          'Creá el validador oficial con el mensaje de advertencia exacto de clase.',
        steps: [
          'Definí la función validarJugada(eleccion).',
          'Caso verdadero: si !isNaN(eleccion) && eleccion > 0 && eleccion < 4, retorná true.',
          'Si no entra en el if, mostrá alert("Ingrese un NUMERO entre 1 y 3") y retorná false.',
          'Probá la función con una jugada válida (ej. 2) y una inválida (ej. 9).'
        ],
        example:
          'validarJugada(2) → true\nvalidarJugada(9) → alert "Ingrese un NUMERO entre 1 y 3" y false',
        hint: 'No hace falta poner else: si el if retorna true, la función termina de inmediato.',
        starter:
          '/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n//Funcion que valida las jugadas\nfunction validarJugada(eleccion) {\n  //caso verdadero\n\n  //se ejecuta, si no es verdadero por que no entra en return true\n}\n\nconsole.log(validarJugada(1));\nconsole.log(validarJugada(5));\n',
        solution:
          "/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n//Funcion que valida las jugadas\nfunction validarJugada(eleccion) {\n  //caso verdadero\n  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {\n    return true;\n  }\n  //se ejecuta, si no es verdadero por que no entra en return true\n  alert('Ingrese un NUMERO entre 1 y 3');\n  return false;\n}\n\nconsole.log(validarJugada(1));\nconsole.log(validarJugada(5));",
        explanation:
          'validarJugada retorna true ante un número válido (1, 2 o 3) y advierte mediante alert ante cualquier valor incorrecto.',
        gameLink:
          'Será utilizada por pedirJugada para controlar los reintentos.'
      },
      {
        title: 'Construir pedirJugada()',
        intro: 'Encapsulá la solicitud de jugada en la FUNCION 2 del proyecto.',
        steps: [
          'La plantilla incluye validarJugada.',
          'Definí pedirJugada() sin parámetros.',
          'Declará let eleccion = 0 y el comentario //1 piedra, 2 papel, 3 para tijera.',
          'Ejecutá el do...while pidiendo con parseInt(prompt("Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera")).',
          'Repetí mientras !validarJugada(eleccion).',
          'Retorná eleccion al salir del bucle.',
          'Llamá a la función y mostrá su retorno en consola.'
        ],
        example: 'El usuario elige 2 → Consola: 2',
        hint: 'parseInt() asegura que eleccion sea un valor numérico entero.',
        starter:
          "function validarJugada(eleccion) {\n  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {\n    return true;\n  }\n  alert('Ingrese un NUMERO entre 1 y 3');\n  return false;\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 2                                 */\n/* -------------------------------------------------------------------------- */\nfunction pedirJugada() {\n  // 1. let eleccion = 0\n  // 2. //1 piedra, 2 papel, 3 para tijera\n  // 3. do...while con parseInt y prompt\n  // 4. return eleccion\n}\n\nconsole.log('Jugada elegida:', pedirJugada());\n",
        solution:
          "function validarJugada(eleccion) {\n  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {\n    return true;\n  }\n  alert('Ingrese un NUMERO entre 1 y 3');\n  return false;\n}\n\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 2                                 */\n/* -------------------------------------------------------------------------- */\nfunction pedirJugada() {\n  let eleccion = 0;\n  //1 piedra, 2 papel, 3 para tijera\n  do {\n    eleccion = parseInt(\n      prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')\n    );\n  } while (!validarJugada(eleccion));\n  return eleccion;\n}\n\nconsole.log('Jugada elegida:', pedirJugada());",
        explanation:
          'pedirJugada es una función limpia: solicita, valida, reintenta y retorna la jugada garantizada.',
        gameLink: 'Será invocada dentro de compararJugadas().'
      }
    ]
  },
  {
    title: 'Jugadas y comparación',
    description:
      'Generá el azar de la computadora y construí la lógica de compararJugadas con emojis.',
    recap:
      'La computadora elige usando parseInt(Math.random() * 3 + 1). La función compararJugadas() define resultadosPosibles = ["Gana el jugador 👶🏻", "Empate 🫱🏻🫲🏻", "Gana la PC 🤖"], obtiene ambas jugadas, loguea la jugada de la PC y evalúa el ganador.',
    syntax:
      'function jugadaRandom() {\n  let numero = parseInt(Math.random() * 3 + 1);\n  return numero;\n}',
    exercises: [
      {
        title: 'Construir jugadaRandom()',
        intro: 'Encapsulá la fórmula de azar en la FUNCION 3 del proyecto.',
        steps: [
          'Definí la función jugadaRandom() sin parámetros.',
          'Dentro, declará let numero = parseInt(Math.random() * 3 + 1);.',
          'Retorná numero;.',
          'Llamá a la función tres veces y mostrá los resultados por consola.'
        ],
        example: 'Consola: 2, 1, 3',
        hint: 'parseInt descarta la parte decimal sin redondear, dando 1, 2 o 3 con igual probabilidad.',
        starter:
          '/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 3                                 */\n/* -------------------------------------------------------------------------- */\nfunction jugadaRandom() {\n  // Generá el entero entre 1 y 3 y retornalo\n}\n\nconsole.log(jugadaRandom());\nconsole.log(jugadaRandom());\nconsole.log(jugadaRandom());\n',
        solution:
          '/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 3                                 */\n/* -------------------------------------------------------------------------- */\nfunction jugadaRandom() {\n  let numero = parseInt(Math.random() * 3 + 1);\n  return numero;\n}\n\nconsole.log(jugadaRandom());\nconsole.log(jugadaRandom());\nconsole.log(jugadaRandom());',
        explanation:
          'jugadaRandom es la FUNCION 3: genera la elección de la computadora de forma simple y autónoma.',
        gameLink:
          'Será invocada dentro de compararJugadas() para definir al contrincante.'
      },
      {
        title: 'Construir compararJugadas()',
        intro:
          'Integrá todo el cuerpo de la FUNCION 4 con llamadas internas y retornos con emojis.',
        steps: [
          'Definí compararJugadas() sin parámetros.',
          'Declará const resultadosPosibles = ["Gana el jugador 👶🏻", "Empate 🫱🏻🫲🏻", "Gana la PC 🤖"].',
          'Obtené las jugadas: const eleccionJugador = pedirJugada(), const eleccionComputadora = jugadaRandom().',
          'Mostrá console.log("Jugada de la PC: " + eleccionComputadora).',
          'Si eleccionJugador == eleccionComputadora, retorná resultadosPosibles[1].',
          'else if (1 y 3) || (2 y 1) || (3 y 2), retorná resultadosPosibles[0].',
          'Por descarte, retorná resultadosPosibles[2].'
        ],
        example:
          'Jugada realizada → Consola: "Jugada de la PC: X" → Consola: "Gana el jugador 👶🏻" (o empate o gana PC)',
        hint: 'La función es autosuficiente: pide la jugada, sortea la de la PC y devuelve el resultado.',
        starter:
          "function validarJugada(e) { if (!isNaN(e) && e > 0 && e < 4) return true; alert('Ingrese un NUMERO entre 1 y 3'); return false; }\nfunction pedirJugada() { let e = 0; do { e = parseInt(prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')); } while (!validarJugada(e)); return e; }\nfunction jugadaRandom() { return parseInt(Math.random() * 3 + 1); }\n\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 4                                 */\n/* -------------------------------------------------------------------------- */\nfunction compararJugadas() {\n  // Escribí la FUNCION 4 completa con resultadosPosibles y bifurcaciones\n}\n\nconsole.log(compararJugadas());\n",
        solution:
          "function validarJugada(e) { if (!isNaN(e) && e > 0 && e < 4) return true; alert('Ingrese un NUMERO entre 1 y 3'); return false; }\nfunction pedirJugada() { let e = 0; do { e = parseInt(prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')); } while (!validarJugada(e)); return e; }\nfunction jugadaRandom() { return parseInt(Math.random() * 3 + 1); }\n\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 4                                 */\n/* -------------------------------------------------------------------------- */\nfunction compararJugadas() {\n  //1 piedra, 2 papel, 3 para tijera\n  const resultadosPosibles = [\n    'Gana el jugador 👶🏻', //Posicion 0 gano\n    'Empate 🫱🏻🫲🏻', //posicion 1 empate\n    'Gana la PC 🤖' // posicion 2 gana pc\n  ];\n  //Necesito obtener jugadas de jugador y pc\n  const eleccionJugador = pedirJugada();\n  const eleccionComputadora = jugadaRandom();\n  console.log('Jugada de la PC: ' + eleccionComputadora);\n  //si son iguales es empate\n  if (eleccionJugador == eleccionComputadora) {\n    return resultadosPosibles[1];\n  }\n  //gana el jugador\n  else if (\n    //jugador piedra       pc tijera\n    (eleccionJugador == 1 && eleccionComputadora == 3) ||\n    //jugador papel        pc piedra\n    (eleccionJugador == 2 && eleccionComputadora == 1) ||\n    //jugador tijera       pc papel\n    (eleccionJugador == 3 && eleccionComputadora == 2)\n  ) {\n    return resultadosPosibles[0];\n  }\n  //por descarte pierde\n  return resultadosPosibles[2];\n}\n\nconsole.log(compararJugadas());",
        explanation:
          'compararJugadas() es la FUNCION 4: coordina una partida completa de piedra, papel o tijera.',
        gameLink:
          'Es la función que se llamará en el programa principal para jugar.'
      },
      {
        title: 'Conectar el Programa Principal de clase',
        intro:
          'Integrá las funciones en la rutina de juego explicada en clase.',
        steps: [
          'La plantilla provee las 4 funciones y los 2 validadores.',
          'Ejecutá const nombreJugador = iniciarJuego();.',
          'Mostrá alert("Gracias por jugar :" + nombreJugador);.',
          'Ejecutá console.log(compararJugadas());.'
        ],
        example:
          'Nombre y jugada → Alertas y consola muestran el resultado de la partida.',
        hint: 'Observá los dos puntos pegados en alert("Gracias por jugar :" + nombreJugador).',
        starter:
          "function validarNombre(n) { if (n == null || n == '' || n.length < 3 || !isNaN(n)) { alert('El nombre ingresado debe ser un texto de al menos 3 caracteres'); return false; } return true; }\nfunction iniciarJuego() { alert('Bienvenido al piedra, papel o tijera de Front 2 :D'); let n; do { n = prompt('Ingrese su nombre por favor: '); } while (!validarNombre(n)); alert('Gracias por jugar ' + n + '. Mucha suerte'); console.log('El jugador es: ' + n); return n.toLocaleUpperCase(); }\nfunction validarJugada(e) { if (!isNaN(e) && e > 0 && e < 4) return true; alert('Ingrese un NUMERO entre 1 y 3'); return false; }\nfunction pedirJugada() { let e = 0; do { e = parseInt(prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')); } while (!validarJugada(e)); return e; }\nfunction jugadaRandom() { return parseInt(Math.random() * 3 + 1); }\nfunction compararJugadas() { const r = ['Gana el jugador 👶🏻', 'Empate 🫱🏻🫲🏻', 'Gana la PC 🤖']; const j = pedirJugada(), pc = jugadaRandom(); console.log('Jugada de la PC: ' + pc); if (j == pc) return r[1]; else if ((j == 1 && pc == 3) || (j == 2 && pc == 1) || (j == 3 && pc == 2)) return r[0]; return r[2]; }\n\n/* -------------------------------------------------------------------------- */\n/*                          PROGRAMA PRINCIPAL                                */\n/* -------------------------------------------------------------------------- */\n// Conectá iniciarJuego, la alerta de gracias y console.log(compararJugadas())\n",
        solution:
          "function validarNombre(n) { if (n == null || n == '' || n.length < 3 || !isNaN(n)) { alert('El nombre ingresado debe ser un texto de al menos 3 caracteres'); return false; } return true; }\nfunction iniciarJuego() { alert('Bienvenido al piedra, papel o tijera de Front 2 :D'); let n; do { n = prompt('Ingrese su nombre por favor: '); } while (!validarNombre(n)); alert('Gracias por jugar ' + n + '. Mucha suerte'); console.log('El jugador es: ' + n); return n.toLocaleUpperCase(); }\nfunction validarJugada(e) { if (!isNaN(e) && e > 0 && e < 4) return true; alert('Ingrese un NUMERO entre 1 y 3'); return false; }\nfunction pedirJugada() { let e = 0; do { e = parseInt(prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')); } while (!validarJugada(e)); return e; }\nfunction jugadaRandom() { return parseInt(Math.random() * 3 + 1); }\nfunction compararJugadas() { const r = ['Gana el jugador 👶🏻', 'Empate 🫱🏻🫲🏻', 'Gana la PC 🤖']; const j = pedirJugada(), pc = jugadaRandom(); console.log('Jugada de la PC: ' + pc); if (j == pc) return r[1]; else if ((j == 1 && pc == 3) || (j == 2 && pc == 1) || (j == 3 && pc == 2)) return r[0]; return r[2]; }\n\n/* -------------------------------------------------------------------------- */\n/*                          PROGRAMA PRINCIPAL                                */\n/* -------------------------------------------------------------------------- */\nconst nombreJugador = iniciarJuego();\nalert('Gracias por jugar :' + nombreJugador);\nconsole.log(compararJugadas());",
        explanation:
          'El programa principal orquesta secuencialmente: bienvenida del jugador y ejecución del duelo.',
        gameLink: 'Cierra el flujo de juego presentado en clase.'
      }
    ]
  },
  {
    title: 'Mesa de trabajo y Desafío',
    description:
      'Resolvé la consigna de la mesa de trabajo y completá el desafío final.',
    recap:
      'La consigna de la mesa de trabajo pide crear una función que reciba el resultado, lo muestre por consola, por alerta, y si fue derrota muestre un mensaje de aliento. En el ejercicio 33 tendrás únicamente validarNombre para programar todo el resto por tu cuenta.',
    syntax:
      "function mostrarResultado(resultado) {\n  console.log(resultado);\n  alert(resultado);\n  if (resultado == 'Gana la PC 🤖') {\n    alert('¡No te desanimes! Mucha suerte en la próxima oportunidad.');\n  }\n}",
    exercises: [
      {
        title: 'Mesa de trabajo: Mostrar y alertar el resultado',
        intro:
          'Creá la función que reciba el resultado y lo imprima en consola y alerta.',
        steps: [
          '1- Creá la función mostrarResultado(resultado) que reciba como parámetro el texto de la frase de resultado.',
          '2- La función debe mostrar por consola el resultado de la partida con console.log(resultado);.',
          '3- A su vez debe mostrar al usuario una alerta con el resultado de la partida con alert(resultado);.',
          'Probá la función pasándole "Gana el jugador 👶🏻".'
        ],
        example:
          'mostrarResultado("Gana el jugador 👶🏻") → Consola y alerta: "Gana el jugador 👶🏻"',
        hint: 'El parámetro resultado representa el string retornado por compararJugadas().',
        starter:
          "/* -------------------------------------------------------------------------- */\n/*                          CONSIGNA MESA DE TRABAJO                          */\n/* -------------------------------------------------------------------------- */\n// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).\n// 2- La función debe mostrar por consola el resultado de la partida.\n// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.\nfunction mostrarResultado(resultado) {\n  // Completá los puntos 1, 2 y 3\n}\n\nmostrarResultado('Gana el jugador 👶🏻');\n",
        solution:
          "/* -------------------------------------------------------------------------- */\n/*                          CONSIGNA MESA DE TRABAJO                          */\n/* -------------------------------------------------------------------------- */\n// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).\n// 2- La función debe mostrar por consola el resultado de la partida.\n// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.\nfunction mostrarResultado(resultado) {\n  console.log(resultado);\n  alert(resultado);\n}\n\nmostrarResultado('Gana el jugador 👶🏻');",
        explanation:
          'mostrarResultado recibe la frase, la imprime en consola y la presenta visualmente mediante alert.',
        gameLink: 'Cumple los primeros 3 puntos de la consigna.'
      },
      {
        title: 'Mesa de trabajo: Mensaje de aliento',
        intro:
          'Agregá el mensaje de aliento ante una derrota frente a la máquina.',
        steps: [
          '4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.',
          'Verificá if (resultado == "Gana la PC 🤖").',
          'Si entra en la condición, mostrá alert("¡No te desanimes! Mucha suerte en la próxima oportunidad.").',
          'Probá llamando a mostrarResultado("Gana la PC 🤖").'
        ],
        example:
          'Alerta 1: "Gana la PC 🤖" → Alerta 2: "¡No te desanimes! Mucha suerte en la próxima oportunidad."',
        hint: 'Compará exactamente con el texto de derrota: "Gana la PC 🤖".',
        starter:
          "function mostrarResultado(resultado) {\n  console.log(resultado);\n  alert(resultado);\n  // 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.\n}\n\nmostrarResultado('Gana la PC 🤖');\n",
        solution:
          "function mostrarResultado(resultado) {\n  console.log(resultado);\n  alert(resultado);\n  if (resultado == 'Gana la PC 🤖') {\n    alert('¡No te desanimes! Mucha suerte en la próxima oportunidad.');\n  }\n}\n\nmostrarResultado('Gana la PC 🤖');",
        explanation:
          'mostrarResultado cumple íntegramente los 4 requerimientos de la consigna de clase.',
        gameLink:
          'La función de la consigna está lista para conectarse al juego.'
      },
      {
        title: 'Desafío Final: Piedra, papel o tijera de Front 2',
        intro:
          'El gran desafío integrador: la plantilla contiene ÚNICAMENTE validarNombre. A partir de ella, construí todas las funciones del juego, resolvé la mesa de trabajo y conectá el programa principal.',
        steps: [
          '1. La plantilla solo te da validarNombre(nombre).',
          '2. Escribí iniciarJuego() utilizando do...while con validarNombre.',
          '3. Escribí validarJugada(eleccion) y pedirJugada().',
          '4. Escribí jugadaRandom() y compararJugadas().',
          '5. Escribí la función de la mesa de trabajo mostrarResultado(resultado).',
          '6. Escribí el programa principal: pedí el nombre, saludá al usuario, jugá la partida y mostrá el resultado final con mensaje de aliento si perdiste.'
        ],
        example:
          'Partida completa de Front 2 ejecutándose de inicio a fin con validaciones y mesa de trabajo resuelta.',
        hint: 'Guiate por las funciones y validadores construidos en las etapas 9 y 10. Reemplazá console.log(compararJugadas()) por mostrarResultado(resultadoPartida).',
        starter:
          "/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n// Funcion que valida el nombre\nfunction validarNombre(nombre) {\n  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {\n    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres');\n    return false;\n  }\n  return true;\n}\n\n// ============================================================================\n// ¡AHORA TE TOCA A VOS CONSTRUIR EL RESTO DEL JUEGO!\n// ============================================================================\n// 1. FUNCION 1: iniciarJuego()\n// 2. FUNCION 2: pedirJugada()\n// 3. FUNCION 3: jugadaRandom()\n// 4. FUNCION 4: compararJugadas()\n// 5. VALIDADOR 2: validarJugada(eleccion)\n// 6. CONSIGNA MESA DE TRABAJO: mostrarResultado(resultado)\n// 7. PROGRAMA PRINCIPAL: iniciarJuego, saludar y mostrarResultado(compararJugadas())\n",
        solution:
          "/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 1                                 */\n/* -------------------------------------------------------------------------- */\nfunction iniciarJuego() {\n  alert('Bienvenido al piedra, papel o tijera de Front 2 :D');\n  let nombre;\n  do {\n    nombre = prompt('Ingrese su nombre por favor: ');\n  } while (!validarNombre(nombre));\n  alert('Gracias por jugar ' + nombre + '. Mucha suerte');\n  console.log('El jugador es: ' + nombre);\n  return nombre.toLocaleUpperCase();\n}\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 2                                 */\n/* -------------------------------------------------------------------------- */\nfunction pedirJugada() {\n  let eleccion = 0;\n  //1 piedra, 2 papel, 3 para tijera\n  do {\n    eleccion = parseInt(\n      prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')\n    );\n  } while (!validarJugada(eleccion));\n  return eleccion;\n}\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 3                                 */\n/* -------------------------------------------------------------------------- */\nfunction jugadaRandom() {\n  let numero = parseInt(Math.random() * 3 + 1);\n  return numero;\n}\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 4                                 */\n/* -------------------------------------------------------------------------- */\nfunction compararJugadas() {\n  //1 piedra, 2 papel, 3 para tijera\n  const resultadosPosibles = [\n    'Gana el jugador 👶🏻', //Posicion 0 gano\n    'Empate 🫱🏻🫲🏻', //posicion 1 empate\n    'Gana la PC 🤖' // posicion 2 gana pc\n  ];\n  //Necesito obtener jugadas de jugador y pc\n  const eleccionJugador = pedirJugada();\n  const eleccionComputadora = jugadaRandom();\n  console.log('Jugada de la PC: ' + eleccionComputadora);\n  //si son iguales es empate\n  if (eleccionJugador == eleccionComputadora) {\n    return resultadosPosibles[1];\n  }\n  //gana el jugador\n  else if (\n    //jugador piedra       pc tijera\n    (eleccionJugador == 1 && eleccionComputadora == 3) ||\n    //jugador papel        pc piedra\n    (eleccionJugador == 2 && eleccionComputadora == 1) ||\n    //jugador tijera       pc papel\n    (eleccionJugador == 3 && eleccionComputadora == 2)\n  ) {\n    return resultadosPosibles[0];\n  }\n  //por descarte pierde\n  return resultadosPosibles[2];\n}\n/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n// Funcion que valida el nombre\nfunction validarNombre(nombre) {\n  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {\n    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres');\n    return false;\n  }\n  return true;\n}\n//Funcion que valida las jugadas\nfunction validarJugada(eleccion) {\n  //caso verdadero\n  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {\n    return true;\n  }\n  //se ejecuta, si no es verdadero por que no entra en return true\n  alert('Ingrese un NUMERO entre 1 y 3');\n  return false;\n}\n/* -------------------------------------------------------------------------- */\n/*                          CONSIGNA MESA DE TRABAJO                          */\n/* -------------------------------------------------------------------------- */\n// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).\n// 2- La función debe mostrar por consola el resultado de la partida.\n// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.\n// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.\nfunction mostrarResultado(resultado) {\n  console.log(resultado);\n  alert(resultado);\n  if (resultado == 'Gana la PC 🤖') {\n    alert('¡No te desanimes! Mucha suerte en la próxima oportunidad.');\n  }\n}\n/* -------------------------------------------------------------------------- */\n/*                          PROGRAMA PRINCIPAL                                */\n/* -------------------------------------------------------------------------- */\nconst nombreJugador = iniciarJuego();\nalert('Gracias por jugar :' + nombreJugador);\nconst resultadoPartida = compararJugadas();\nmostrarResultado(resultadoPartida);",
        explanation:
          'El proyecto está 100% completo, articulando la bienvenida, la toma de jugadas, la comparación lógica y la resolución de la mesa de trabajo.',
        gameLink:
          '¡Felicitaciones! Has completado el proyecto oficial de Front 2.'
      }
    ]
  }
]

// Combine all 11 stages
const allStages = [...stages1To8, ...newStages]
console.log('Total combined stages:', allStages.length)

let totalEx = 0
allStages.forEach((s, sIdx) => {
  s.exercises.forEach((ex, eIdx) => {
    totalEx++
    try {
      new Function('prompt', 'alert', 'console', ex.solution)
    } catch (e) {
      console.error(
        `Syntax error in Stage ${sIdx + 1} Exercise ${eIdx + 1} (${ex.title}):`,
        e.message
      )
      process.exit(1)
    }
  })
})
console.log(`Validated syntax of all ${totalEx} exercises successfully!`)

// 3. Syntax highlighter for HTML export
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function highlightCode(code) {
  const tokenRegex =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(\b(?:function|return|let|const|var|if|else|do|while|for|typeof)\b)|(\b\d+(?:\.\d+)?\b)|(===|==|!=|!==|&&|\|\||!|\+|-|\*|\/|<=|>=|<|>|=)|(\b(?:prompt|alert|console|Math|parseInt|Number|isNaN|toLocaleUpperCase)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*\b)|(\s+)|([^\s\w])/g

  let html = ''
  let match
  while ((match = tokenRegex.exec(code)) !== null) {
    const [
      token,
      comment,
      str,
      keyword,
      num,
      op,
      builtin,
      ident,
      space,
      punct
    ] = match
    if (comment) {
      html += `<span class="cm-comment">${escapeHtml(comment)}</span>`
    } else if (str) {
      html += `<span class="cm-string">${escapeHtml(str)}</span>`
    } else if (keyword) {
      html += `<span class="cm-keyword">${escapeHtml(keyword)}</span>`
    } else if (num) {
      html += `<span class="cm-number">${escapeHtml(num)}</span>`
    } else if (op) {
      html += `<span class="cm-operator">${escapeHtml(op)}</span>`
    } else if (builtin) {
      html += `<span class="cm-builtin">${escapeHtml(builtin)}</span>`
    } else if (ident) {
      html += `<span class="cm-variable">${escapeHtml(ident)}</span>`
    } else if (space) {
      html += space
    } else {
      html += escapeHtml(token)
    }
  }
  return html
}

const htmlHeadStyle = `<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:17px/1.65 Arial,sans-serif;color:#203a36;max-width:850px;margin:45px auto;padding:0 28px}h1{font-size:38px;line-height:1.2}h2{margin-top:50px;border-bottom:3px solid #bbd96b;padding-bottom:12px}h3{margin-top:32px}pre{background:#f0f4ee;padding:20px;white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.7 Consolas,monospace}p{margin:10px 0}@media print{body{font-size:11pt;margin:0}h2{break-before:page}h2,h3{break-after:avoid}pre{font-size:9pt}}/* One Dark-inspired JavaScript palette, shared by the editor and examples. */
.cm-s-odawi.CodeMirror,.cm-s-odawi{background:#282c34;color:#abb2bf}
.CodeMirror{height:340px;font:16px/1.75 Consolas,'Courier New',monospace;text-align:left}
.CodeMirror-scroll{min-height:220px}
.cm-s-odawi .CodeMirror-gutters{background:#242830;border-right:1px solid #3a404b}
.cm-s-odawi .CodeMirror-linenumber{color:#8b929f;padding:0 10px 0 8px}
.cm-s-odawi .CodeMirror-cursor{border-left:2px solid #c8d0dc}
.cm-s-odawi .CodeMirror-selected{background:#3e4451}
.cm-s-odawi.CodeMirror-focused .CodeMirror-selected{background:#3e4451}
.cm-s-odawi .CodeMirror-activeline-background{background:#2c313c}
.cm-s-odawi .cm-keyword{color:#c678dd}
.cm-s-odawi .cm-operator{color:#56b6c2}
.cm-s-odawi .cm-number,.cm-s-odawi .cm-atom{color:#d19a66}
.cm-s-odawi .cm-def{color:#61afef}
.cm-s-odawi .cm-variable{color:#e06c75}
.cm-s-odawi .cm-variable-2,.cm-s-odawi .cm-variable-3{color:#e5c07b}
.cm-s-odawi .cm-property{color:#61afef}
.cm-s-odawi .cm-string,.cm-s-odawi .cm-string-2{color:#98c379}
.cm-s-odawi .cm-comment{color:#969eae;font-style:italic}
.cm-s-odawi .cm-builtin{color:#e5c07b}
.cm-s-odawi .cm-meta{color:#56b6c2}
.cm-s-odawi .cm-error{color:#ff8796;text-decoration:underline wavy}
.cm-s-odawi .CodeMirror-matchingbracket{color:#fff!important;background:#455366;outline:1px solid #8fabc8}
.cm-s-odawi .CodeMirror-nonmatchingbracket{color:#ff8796!important}
.CodeMirror-lines{padding:18px 0}
.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 16px}
.CodeMirror-hints{max-width:min(420px,90vw);max-height:260px;background:#21252b;color:#abb2bf;border:1px solid #667385;border-radius:7px;padding:5px;box-shadow:0 8px 22px #0005;font:14px/1.4 Consolas,monospace;z-index:100}
.CodeMirror-hint{padding:8px 10px;border-radius:4px;white-space:normal;color:#d8deea}
.CodeMirror-hint-active{background:#384c67!important;color:white!important}
.CodeMirror-hint strong{font-weight:600;color:#a2caff}
.hint-description{display:block;margin-top:3px;color:#c0c7d2;font:13px/1.4 Arial,sans-serif}
.editor-heading{background:#21252b}.editor-heading span{color:#b3bdcc}
.recap pre.cm-s-odawi,#solution-code.cm-s-odawi{background:#282c34;padding:16px;border-radius:6px;font-size:14px;line-height:1.75;tab-size:2}
.editor-keys{border-top:1px solid var(--line);margin:0;padding:12px 16px;color:var(--muted);font-size:13px;background:#f7f9f6}
kbd{font:12px Consolas,monospace;border:1px solid #c6d0c9;border-radius:3px;background:white;padding:2px 4px;white-space:nowrap}
@media print{pre.cm-s-odawi{background:#f3f4f6;color:#26313c}.cm-s-odawi .cm-comment{color:#586170}.cm-s-odawi .cm-string{color:#386724}.cm-s-odawi .cm-keyword{color:#7a3791}.cm-s-odawi .cm-number,.cm-s-odawi .cm-atom{color:#915017}.cm-s-odawi .cm-def,.cm-s-odawi .cm-property{color:#205d93}.cm-s-odawi .cm-variable{color:#9b3145}}
</style><body>`

// 4. Update index.html
console.log('Updating index.html...')
let indexHtml = fs.readFileSync('index.html', 'utf8')

// Replace topline text "8 etapas · 24 ejercicios"
indexHtml = indexHtml.replace(
  '<span>8 etapas · 24 ejercicios</span>',
  '<span>11 etapas · 33 ejercicios</span>'
)

// Replace stages array
const startIdx = indexHtml.indexOf('const stages = [')
const endIdx = indexHtml.indexOf('\n      let stageIndex = 0,', startIdx)
if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not find stages boundaries in index.html')
}

const formattedStages = 'const stages = ' + JSON.stringify(allStages, null, 2)
indexHtml =
  indexHtml.substring(0, startIdx) +
  formattedStages +
  indexHtml.substring(endIdx)

// Update dynamic position calculation in showExercise()
const oldPosMatch =
  "$('position').textContent =\n          'Ejercicio ' + (stageIndex * 3 + exerciseIndex + 1) + ' de 24'"
const oldPosMatchAlt =
  "$('position').textContent =\r\n          'Ejercicio ' + (stageIndex * 3 + exerciseIndex + 1) + ' de 24'"

const newPosCalculation = `const totalExercises = stages.reduce((acc, s) => acc + s.exercises.length, 0)
        let currentNum = 0
        for (let i = 0; i < stageIndex; i++) currentNum += stages[i].exercises.length
        currentNum += exerciseIndex + 1
        $('position').textContent = 'Ejercicio ' + currentNum + ' de ' + totalExercises`

if (indexHtml.includes(oldPosMatch)) {
  indexHtml = indexHtml.replace(oldPosMatch, newPosCalculation)
} else if (indexHtml.includes(oldPosMatchAlt)) {
  indexHtml = indexHtml.replace(oldPosMatchAlt, newPosCalculation)
} else {
  // Regex replacement
  indexHtml = indexHtml.replace(
    /\$\('position'\)\.textContent\s*=\s*'Ejercicio '\s*\+\s*\(stageIndex \* 3 \+ exerciseIndex \+ 1\)\s*\+\s*' de 24'/,
    newPosCalculation
  )
}

// Update maximum in registerTool if present
indexHtml = indexHtml.replace('maximum: 8', 'maximum: 11')

fs.writeFileSync('index.html', indexHtml, 'utf8')
console.log('index.html updated successfully.')

// 5. Update ODAWI-guia-estudiantes.md & .html
console.log('Generating ODAWI-guia-estudiantes.md & .html...')
let guiaMd = `# ODAWI · Volver a programar

Práctica de recuperación antes de DOM y Proyecto Front 2 · 11 etapas · 33 ejercicios

## Cómo trabajar

1. Leé el recordatorio de la etapa.
2. Anticipá qué entradas necesitás y qué resultado esperás.
3. Escribí tu solución en el laboratorio o en un archivo JavaScript conectado a un HTML.
4. Ejecutá con los casos propuestos.
5. Recién después, compará con la resolución y explicá cada variable.

El recorrido está organizado en dos partes:
- **Parte 1 (Etapas 1 a 8):** Fundamentos de programación previos a DOM (entrada/salida, datos, funciones, alternativas, repeticiones, arreglos, métodos y objetos literales).
- **Parte 2 (Etapas 9 a 11):** Construcción paso a paso del juego canónico de Front 2 (iniciarJuego, validarJugada, pedirJugada, jugadaRandom, compararJugadas, mesa de trabajo y el Desafío Final).

El laboratorio acepta JavaScript sin DOM. prompt abre una ventana de entrada dentro de la página; alert y console.log se muestran en el panel Resultados. Los borradores se conservan mientras la página esté abierta. Las repeticiones demasiado largas se detienen para que puedas corregirlas.

## Ayudas del editor

El editor usa colores tipo One Dark: textos en verde, palabras clave en violeta, números en naranja y comentarios en gris. Los nombres y propiedades también se diferencian con color.

Las sugerencias aparecen mientras escribís. También podés abrirlas con Ctrl + Espacio o con el botón Sugerencias. Elegí con las flechas, aceptá con Enter o Tab y cerrá con Esc. Ctrl + Enter ejecuta el programa.
`

let guiaHtml =
  htmlHeadStyle +
  `<title>ODAWI · Guía para estudiantes</title><h1>ODAWI · Volver a programar</h1>\n\n<p>Práctica de recuperación antes de DOM y Proyecto Front 2 · 11 etapas · 33 ejercicios</p>\n\n<h2>Cómo trabajar</h2>\n\n<p>1. Leé el recordatorio de la etapa.</p>\n<p>2. Anticipá qué entradas necesitás y qué resultado esperás.</p>\n<p>3. Escribí tu solución en el laboratorio o en un archivo JavaScript conectado a un HTML.</p>\n<p>4. Ejecutá con los casos propuestos.</p>\n<p>5. Recién después, compará con la resolución y explicá cada variable.</p>\n\n<p>El recorrido está organizado en dos partes:<br>• <strong>Parte 1 (Etapas 1 a 8):</strong> Fundamentos de programación previos a DOM.<br>• <strong>Parte 2 (Etapas 9 a 11):</strong> Construcción paso a paso del juego canónico de Front 2 y la Mesa de Trabajo.</p>\n\n<p>El laboratorio acepta JavaScript sin DOM. prompt abre una ventana de entrada dentro de la página; alert y console.log se muestran en el panel Resultados. Los borradores se conservan mientras la página esté abierta.</p>\n\n<h2>Ayudas del editor</h2>\n\n<p>El editor usa colores tipo One Dark: textos en verde, palabras clave en violeta, números en naranja y comentarios en gris.</p>\n`

let exNumber = 1
allStages.forEach((stage, sIdx) => {
  guiaMd += `\n## Etapa ${sIdx + 1}. ${stage.title}\n\n${stage.description}\n\n### Recordatorio\n\n${stage.recap}\n\n\`\`\`javascript\n${stage.syntax}\n\`\`\`\n`

  guiaHtml += `\n<h2>Etapa ${sIdx + 1}. ${escapeHtml(stage.title)}</h2>\n\n<p>${escapeHtml(stage.description)}</p>\n\n<h3>Recordatorio</h3>\n\n<p>${escapeHtml(stage.recap)}</p>\n\n<pre class="cm-s-odawi"><code>\n${highlightCode(stage.syntax)}\n</code></pre>\n`

  stage.exercises.forEach((ex, eIdx) => {
    guiaMd += `\n### Ejercicio ${exNumber}. ${ex.title}\n\n${ex.intro}\n\n**Para el juego:** ${ex.gameLink}\n\n`
    ex.steps.forEach((step, stepIdx) => {
      guiaMd += `${stepIdx + 1}. ${step}\n`
    })
    guiaMd += `\n**Casos de prueba**\n\n${ex.example}\n\n**Pista:** ${ex.hint}\n\n**Plantilla para completar**\n\n\`\`\`javascript\n${ex.starter}\`\`\`\n\n**Antes de avanzar:** explicá qué hace cada línea y qué cambia si ingresás otros datos.\n`

    guiaHtml += `\n<h3>Ejercicio ${exNumber}. ${escapeHtml(ex.title)}</h3>\n\n<p>${escapeHtml(ex.intro)}</p>\n\n<p><strong>Para el juego:</strong> ${escapeHtml(ex.gameLink)}</p>\n\n`
    ex.steps.forEach((step, stepIdx) => {
      guiaHtml += `<p>${stepIdx + 1}. ${escapeHtml(step)}</p>\n`
    })
    guiaHtml += `\n<p><strong>Casos de prueba</strong></p>\n\n<p>${escapeHtml(ex.example).replace(/\n/g, '<br>')}</p>\n\n<p><strong>Pista:</strong> ${escapeHtml(ex.hint)}</p>\n\n<p><strong>Plantilla para completar</strong></p>\n\n<pre class="cm-s-odawi"><code>\n${highlightCode(ex.starter)}\n</code></pre>\n\n<p><strong>Antes de avanzar:</strong> explicá qué hace cada línea y qué cambia si ingresás otros datos.</p>\n`

    exNumber++
  })
})

guiaHtml += `</body></html>`
fs.writeFileSync('ODAWI-guia-estudiantes.md', guiaMd, 'utf8')
fs.writeFileSync('ODAWI-guia-estudiantes.html', guiaHtml, 'utf8')
console.log('ODAWI-guia-estudiantes.md & .html updated.')

// 6. Update ODAWI-resoluciones.md & .html
console.log('Generating ODAWI-resoluciones.md & .html...')
let resolMd = `# ODAWI · Resoluciones explicadas

Usá este documento después de intentar los ejercicios. Hay otras soluciones correctas: compará el razonamiento, las entradas y las salidas.
`

let resolHtml =
  htmlHeadStyle +
  `<title>ODAWI · Resoluciones explicadas</title><h1>ODAWI · Resoluciones explicadas</h1>\n\n<p>Usá este documento después de intentar los ejercicios. Hay otras soluciones correctas: compará el razonamiento, las entradas y las salidas.</p>\n`

exNumber = 1
allStages.forEach((stage, sIdx) => {
  resolMd += `\n## Etapa ${sIdx + 1}. ${stage.title}\n`
  resolHtml += `\n<h2>Etapa ${sIdx + 1}. ${escapeHtml(stage.title)}</h2>\n`

  stage.exercises.forEach((ex, eIdx) => {
    resolMd += `\n### Ejercicio ${exNumber}. ${ex.title}\n\n\`\`\`javascript\n${ex.solution}\n\`\`\`\n\n${ex.explanation}\n\n**Probá:**\n\n${ex.example}\n`

    resolHtml += `\n<h3>Ejercicio ${exNumber}. ${escapeHtml(ex.title)}</h3>\n\n<pre class="cm-s-odawi"><code>\n${highlightCode(ex.solution)}\n</code></pre>\n\n<p>${escapeHtml(ex.explanation)}</p>\n\n<p><strong>Probá:</strong></p>\n\n<p>${escapeHtml(ex.example).replace(/\n/g, '<br>')}</p>\n`

    exNumber++
  })
})

const finalCanonicalCode = `/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 1                                 */\n/* -------------------------------------------------------------------------- */\nfunction iniciarJuego() {\n  alert('Bienvenido al piedra, papel o tijera de Front 2 :D');\n  let nombre;\n  do {\n    nombre = prompt('Ingrese su nombre por favor: ');\n  } while (!validarNombre(nombre));\n  alert('Gracias por jugar ' + nombre + '. Mucha suerte');\n  console.log('El jugador es: ' + nombre);\n  return nombre.toLocaleUpperCase();\n}\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 2                                 */\n/* -------------------------------------------------------------------------- */\nfunction pedirJugada() {\n  let eleccion = 0;\n  //1 piedra, 2 papel, 3 para tijera\n  do {\n    eleccion = parseInt(\n      prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')\n    );\n  } while (!validarJugada(eleccion));\n  return eleccion;\n}\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 3                                 */\n/* -------------------------------------------------------------------------- */\nfunction jugadaRandom() {\n  let numero = parseInt(Math.random() * 3 + 1);\n  return numero;\n}\n/* -------------------------------------------------------------------------- */\n/*                                  FUNCION 4                                 */\n/* -------------------------------------------------------------------------- */\nfunction compararJugadas() {\n  //1 piedra, 2 papel, 3 para tijera\n  const resultadosPosibles = [\n    'Gana el jugador 👶🏻', //Posicion 0 gano\n    'Empate 🫱🏻🫲🏻', //posicion 1 empate\n    'Gana la PC 🤖' // posicion 2 gana pc\n  ];\n  //Necesito obtener jugadas de jugador y pc\n  const eleccionJugador = pedirJugada();\n  const eleccionComputadora = jugadaRandom();\n  console.log('Jugada de la PC: ' + eleccionComputadora);\n  //si son iguales es empate\n  if (eleccionJugador == eleccionComputadora) {\n    return resultadosPosibles[1];\n  }\n  //gana el jugador\n  else if (\n    //jugador piedra       pc tijera\n    (eleccionJugador == 1 && eleccionComputadora == 3) ||\n    //jugador papel        pc piedra\n    (eleccionJugador == 2 && eleccionComputadora == 1) ||\n    //jugador tijera       pc papel\n    (eleccionJugador == 3 && eleccionComputadora == 2)\n  ) {\n    return resultadosPosibles[0];\n  }\n  //por descarte pierde\n  return resultadosPosibles[2];\n}\n/* -------------------------------------------------------------------------- */\n/*                                  VALIDADORES                               */\n/* -------------------------------------------------------------------------- */\n// Funcion que valida el nombre\nfunction validarNombre(nombre) {\n  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {\n    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres');\n    return false;\n  }\n  return true;\n}\n//Funcion que valida las jugadas\nfunction validarJugada(eleccion) {\n  //caso verdadero\n  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {\n    return true;\n  }\n  //se ejecuta, si no es verdadero por que no entra en return true\n  alert('Ingrese un NUMERO entre 1 y 3');\n  return false;\n}\n/* -------------------------------------------------------------------------- */\n/*                          CONSIGNA MESA DE TRABAJO                          */\n/* -------------------------------------------------------------------------- */\n// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).\n// 2- La función debe mostrar por consola el resultado de la partida.\n// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.\n// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.\nfunction mostrarResultado(resultado) {\n  console.log(resultado);\n  alert(resultado);\n  if (resultado == 'Gana la PC 🤖') {\n    alert('¡No te desanimes! Mucha suerte en la próxima oportunidad.');\n  }\n}\n/* -------------------------------------------------------------------------- */\n/*                          PROGRAMA PRINCIPAL                                */\n/* -------------------------------------------------------------------------- */\nconst nombreJugador = iniciarJuego();\nalert('Gracias por jugar :' + nombreJugador);\nconst resultadoPartida = compararJugadas();\nmostrarResultado(resultadoPartida);`

resolMd += `\n## Solución Canónica Oficial (Front 2 & Mesa de Trabajo)

Este es el código completo consolidado que resuelve el Desafío Final (Ejercicio 33):

\`\`\`javascript
${finalCanonicalCode}
\`\`\`
`

resolHtml += `\n<h2>Solución Canónica Oficial (Front 2 & Mesa de Trabajo)</h2>\n\n<p>Este es el código completo consolidado que resuelve el Desafío Final (Ejercicio 33):</p>\n\n<pre class="cm-s-odawi"><code>\n${highlightCode(finalCanonicalCode)}\n</code></pre>\n</body></html>`

fs.writeFileSync('ODAWI-resoluciones.md', resolMd, 'utf8')
fs.writeFileSync('ODAWI-resoluciones.html', resolHtml, 'utf8')
console.log('ODAWI-resoluciones.md & .html updated.')

console.log('All 5 files generated and updated successfully!')
