const fs = require('fs')
const path = require('path')
const stagesData = require('./build_stages.js')

// 1. Syntax highlighter for HTML export
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function highlightCode(code) {
  // Simple syntax highlighter mimicking CodeMirror odawi theme
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

// 2. Build index.html update
console.log('Updating index.html...')
let indexHtml = fs.readFileSync('index.html', 'utf8')
const startIdx = indexHtml.indexOf('const stages = [')
const endIdx = indexHtml.indexOf('\n      let stageIndex = 0,', startIdx)
if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not find stages boundaries in index.html')
}

const formattedStages = 'const stages = ' + JSON.stringify(stagesData, null, 2)
indexHtml =
  indexHtml.substring(0, startIdx) +
  formattedStages +
  indexHtml.substring(endIdx)
fs.writeFileSync('index.html', indexHtml, 'utf8')
console.log('index.html updated successfully.')

// 3. Build ODAWI-guia-estudiantes.md & ODAWI-guia-estudiantes.html
console.log('Generating ODAWI-guia-estudiantes.md & .html...')
let guiaMd = `# ODAWI · Volver a programar

Práctica de recuperación antes de DOM · 8 etapas · 24 ejercicios

## Cómo trabajar

1. Leé el recordatorio de la etapa.
2. Anticipá qué entradas necesitás y qué resultado esperás.
3. Escribí tu solución en el laboratorio o en un archivo JavaScript conectado a un HTML.
4. Ejecutá con los casos propuestos.
5. Recién después, compará con la resolución y explicá cada variable.

Una o dos etapas por encuentro es una referencia, no una carrera. Volvé a resolver los ejercicios cambiando los datos. El recorrido es validar y pedir nombre → validar jugada → pedir jugada → jugada aleatoria → resultados y empates → victoria y derrota → programa principal → consigna mesa de trabajo. Cada ejercicio es independiente: las funciones de apoyo que necesitás ya están incluidas en su plantilla.

El laboratorio acepta JavaScript sin DOM. prompt abre una ventana de entrada dentro de la página; alert y console.log se muestran en el panel Resultados. Los borradores se conservan mientras la página esté abierta. El laboratorio está pensado para estos programas secuenciales; no para DOM, temporizadores, red ni programas asincrónicos. Las repeticiones demasiado largas se detienen para que puedas corregirlas.

## Ayudas del editor

El editor usa colores tipo One Dark: textos en verde, palabras clave en violeta, números en naranja y comentarios en gris. Los nombres y propiedades también se diferencian con color.

Las sugerencias aparecen mientras escribís. También podés abrirlas con Ctrl + Espacio o con el botón Sugerencias. Elegí con las flechas, aceptá con Enter o Tab y cerrá con Esc. Ctrl + Enter ejecuta el programa. El editor cierra automáticamente comillas, paréntesis, corchetes y llaves. Las sugerencias completan nombres; no verifican si la solución es correcta.
`

let guiaHtml =
  htmlHeadStyle.replace('<title>ODAWI · Guía para estudiantes</title>', '') +
  `<title>ODAWI · Guía para estudiantes</title><h1>ODAWI · Volver a programar</h1>\n\n<p>Práctica de recuperación antes de DOM · 8 etapas · 24 ejercicios</p>\n\n<h2>Cómo trabajar</h2>\n\n<p>1. Leé el recordatorio de la etapa.</p>\n<p>2. Anticipá qué entradas necesitás y qué resultado esperás.</p>\n<p>3. Escribí tu solución en el laboratorio o en un archivo JavaScript conectado a un HTML.</p>\n<p>4. Ejecutá con los casos propuestos.</p>\n<p>5. Recién después, compará con la resolución y explicá cada variable.</p>\n\n<p>Una o dos etapas por encuentro es una referencia, no una carrera. Volvé a resolver los ejercicios cambiando los datos. El recorrido es validar y pedir nombre → validar jugada → pedir jugada → jugada aleatoria → resultados y empates → victoria y derrota → programa principal → consigna mesa de trabajo. Cada ejercicio es independiente: las funciones de apoyo que necesitás ya están incluidas en su plantilla.</p>\n\n<p>El laboratorio acepta JavaScript sin DOM. prompt abre una ventana de entrada dentro de la página; alert y console.log se muestran en el panel Resultados. Los borradores se conservan mientras la página esté abierta. El laboratorio está pensado para estos programas secuenciales; no para DOM, temporizadores, red ni programas asincrónicos. Las repeticiones demasiado largas se detienen para que puedas corregirlas.</p>\n\n<h2>Ayudas del editor</h2>\n\n<p>El editor usa colores tipo One Dark: textos en verde, palabras clave en violeta, números en naranja y comentarios en gris. Los nombres y propiedades también se diferencian con color.</p>\n\n<p>Las sugerencias aparecen mientras escribís. También podés abrirlas con Ctrl + Espacio o con el botón Sugerencias. Elegí con las flechas, aceptá con Enter o Tab y cerrá con Esc. Ctrl + Enter ejecuta el programa. El editor cierra automáticamente comillas, paréntesis, corchetes y llaves. Las sugerencias completan nombres; no verifican si la solución es correcta.</p>\n`

let exNumber = 1
stagesData.forEach((stage, sIdx) => {
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

// 4. Build ODAWI-resoluciones.md & ODAWI-resoluciones.html
console.log('Generating ODAWI-resoluciones.md & .html...')
let resolMd = `# ODAWI · Resoluciones explicadas

Usá este documento después de intentar los ejercicios. Hay otras soluciones correctas: compará el razonamiento, las entradas y las salidas.
`

let resolHtml =
  htmlHeadStyle.replace('<title>ODAWI · Guía para estudiantes</title>', '') +
  `<title>ODAWI · Resoluciones explicadas</title><h1>ODAWI · Resoluciones explicadas</h1>\n\n<p>Usá este documento después de intentar los ejercicios. Hay otras soluciones correctas: compará el razonamiento, las entradas y las salidas.</p>\n`

exNumber = 1
stagesData.forEach((stage, sIdx) => {
  resolMd += `\n## Etapa ${sIdx + 1}. ${stage.title}\n`
  resolHtml += `\n<h2>Etapa ${sIdx + 1}. ${escapeHtml(stage.title)}</h2>\n`

  stage.exercises.forEach((ex, eIdx) => {
    resolMd += `\n### Ejercicio ${exNumber}. ${ex.title}\n\n\`\`\`javascript\n${ex.solution}\n\`\`\`\n\n${ex.explanation}\n\n**Probá:**\n\n${ex.example}\n`

    resolHtml += `\n<h3>Ejercicio ${exNumber}. ${escapeHtml(ex.title)}</h3>\n\n<pre class="cm-s-odawi"><code>\n${highlightCode(ex.solution)}\n</code></pre>\n\n<p>${escapeHtml(ex.explanation)}</p>\n\n<p><strong>Probá:</strong></p>\n\n<p>${escapeHtml(ex.example).replace(/\n/g, '<br>')}</p>\n`

    exNumber++
  })
})

const finalFullCode = `/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
  let numero = parseInt(Math.random() * 3 + 1)
  return numero
}
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
function compararJugadas() {
  //1 piedra, 2 papel, 3 para tijera
  const resultadosPosibles = [
    'Gana el jugador 👶🏻', //Posicion 0 gano
    'Empate 🫱🏻🫲🏻', //posicion 1 empate
    'Gana la PC 🤖' // posicion 2 gana pc
  ]
  //Necesito obtener jugadas de jugador y pc
  const eleccionJugador = pedirJugada()
  const eleccionComputadora = jugadaRandom()
  console.log('Jugada de la PC: ' + eleccionComputadora)
  //si son iguales es empate
  if (eleccionJugador == eleccionComputadora) {
    return resultadosPosibles[1]
  }
  //gana el jugador
  else if (
    //jugador piedra       pc tijera
    (eleccionJugador == 1 && eleccionComputadora == 3) ||
    //jugador papel        pc piedra
    (eleccionJugador == 2 && eleccionComputadora == 1) ||
    //jugador tijera       pc papel
    (eleccionJugador == 3 && eleccionComputadora == 2)
  ) {
    return resultadosPosibles[0]
  }
  //por descarte pierde
  return resultadosPosibles[2]
}
/* -------------------------------------------------------------------------- */
/*                                  VALIDADORES                               */
/* -------------------------------------------------------------------------- */
// Funcion que valida el nombre
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}
//Funcion que valida las jugadas
function validarJugada(eleccion) {
  //caso verdadero
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  //se ejecuta, si no es verdadero por que no entra en return true
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
}
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.
function mostrarResultado(resultado) {
  console.log(resultado)
  alert(resultado)
  if (resultado == 'Gana la PC 🤖') {
    alert('¡No te desanimes! Mucha suerte en la próxima oportunidad.')
  }
}
/* -------------------------------------------------------------------------- */
/*                          PROGRAMA PRINCIPAL                                */
/* -------------------------------------------------------------------------- */
const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
const resultadoPartida = compararJugadas()
mostrarResultado(resultadoPartida)`

resolMd += `\n## Cómo se conectan las piezas

1. **validarNombre(nombre)**: Validador provisto que comprueba no nulo, no vacío, longitud mínima de 3 caracteres y no numérico (!isNaN).
2. **iniciarJuego()**: FUNCION 1. Da la bienvenida, usa do...while con validarNombre, agradece, loguea en consola y retorna el nombre en mayúsculas.
3. **validarJugada(eleccion)**: Validador de jugadas que comprueba !isNaN y rango entre 1 y 3. Alerta y retorna false si es inválido.
4. **pedirJugada()**: FUNCION 2. Declara eleccion = 0, solicita con prompt y parseInt en do...while con validarJugada, y retorna la jugada.
5. **jugadaRandom()**: FUNCION 3. Produce un entero entre 1 y 3 mediante parseInt(Math.random() * 3 + 1).
6. **compararJugadas()**: FUNCION 4. Define resultadosPosibles con emojis ('Gana el jugador 👶🏻', 'Empate 🫱🏻🫲🏻', 'Gana la PC 🤖'), obtiene elecciones de jugador y PC, muestra la jugada de la PC y evalúa el desenlace.
7. **mostrarResultado(resultado)**: Función de la Mesa de Trabajo. Imprime en consola, lanza alert y ante derrota ('Gana la PC 🤖') muestra un mensaje de aliento.
8. **Programa Principal**: Coordina el inicio, el saludo y pasa el retorno de compararJugadas() a mostrarResultado().

## Código consolidado final

\`\`\`javascript
${finalFullCode}
\`\`\`
`

resolHtml += `\n<h2>Cómo se conectan las piezas</h2>\n\n<ol>\n<li><strong>validarNombre(nombre):</strong> Validador provisto que comprueba no nulo, no vacío, longitud mínima de 3 caracteres y no numérico (!isNaN).</li>\n<li><strong>iniciarJuego():</strong> FUNCION 1. Da la bienvenida, usa do...while con validarNombre, agradece, loguea en consola y retorna el nombre en mayúsculas.</li>\n<li><strong>validarJugada(eleccion):</strong> Validador de jugadas que comprueba !isNaN y rango entre 1 y 3. Alerta y retorna false si es inválido.</li>\n<li><strong>pedirJugada():</strong> FUNCION 2. Declara eleccion = 0, solicita con prompt y parseInt en do...while con validarJugada, y retorna la jugada.</li>\n<li><strong>jugadaRandom():</strong> FUNCION 3. Produce un entero entre 1 y 3 mediante parseInt(Math.random() * 3 + 1).</li>\n<li><strong>compararJugadas():</strong> FUNCION 4. Define resultadosPosibles con emojis ('Gana el jugador 👶🏻', 'Empate 🫱🏻🫲🏻', 'Gana la PC 🤖'), obtiene elecciones de jugador y PC, muestra la jugada de la PC y evalúa el desenlace.</li>\n<li><strong>mostrarResultado(resultado):</strong> Función de la Mesa de Trabajo. Imprime en consola, lanza alert y ante derrota ('Gana la PC 🤖') muestra un mensaje de aliento.</li>\n<li><strong>Programa Principal:</strong> Coordina el inicio, el saludo y pasa el retorno de compararJugadas() a mostrarResultado().</li>\n</ol>\n\n<h2>Código consolidado final</h2>\n\n<pre class="cm-s-odawi"><code>\n${highlightCode(finalFullCode)}\n</code></pre>\n</body></html>`

fs.writeFileSync('ODAWI-resoluciones.md', resolMd, 'utf8')
fs.writeFileSync('ODAWI-resoluciones.html', resolHtml, 'utf8')
console.log('ODAWI-resoluciones.md & .html updated.')

console.log('All files generated successfully!')
