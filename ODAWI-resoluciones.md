# ODAWI · Resoluciones explicadas

Usá este documento después de intentar los ejercicios. Hay otras soluciones correctas: compará el razonamiento, las entradas y las salidas.

## Etapa 1. Entrada y salida

### Ejercicio 1. Tu primer saludo

```javascript
const nombreJugador = prompt("¿Cómo te llamás?");
alert("Hola, " + nombreJugador + ". Bienvenido a ODAWI.");
console.log(nombreJugador);
```

La pregunta produce un dato; la variable lo conserva para usarlo en más de una salida.

**Probá:**

Entrada: Ana → Hola, Ana. Bienvenido a ODAWI.
Consola: Ana

### Ejercicio 2. Presentar el duelo

```javascript
const nombreJugador = prompt("Nombre del jugador:");
const nombreRival = "Computadora";
console.log(nombreJugador + " juega contra " + nombreRival + ".");
```

Las variables pueden guardar tanto datos ingresados como valores definidos por el programa.

**Probá:**

Entrada: Luz → Luz juega contra Computadora.

### Ejercicio 3. Pedir una elección

```javascript
const eleccionIngresada = prompt("Escribí piedra, papel o tijera:");
console.log("Elegiste: " + eleccionIngresada);
```

Mostrar el dato permite comprobar qué recibió el programa antes de procesarlo.

**Probá:**

Entrada: piedra → Elegiste: piedra
Entrada: tijera → Elegiste: tijera

## Etapa 2. Datos y operaciones

### Ejercicio 4. Sumar victorias

```javascript
const victoriasJugador = Number(prompt("Victorias del jugador:"));
const victoriasComputadora = Number(prompt("Victorias de la computadora:"));
const rondasConGanador = victoriasJugador + victoriasComputadora;
console.log("Rondas con ganador: " + rondasConGanador);
```

Los empates no se cuentan aquí porque no producen una victoria. "1" + "2" daría "12"; 1 + 2 da 3.

**Probá:**

Entradas: 1 / 2 → Rondas con ganador: 3
Entradas: 0 / 1 → Rondas con ganador: 1

### Ejercicio 5. Llegar a dos

```javascript
const victoriasNecesarias = 2;
const victoriasActuales = Number(prompt("Victorias actuales: 0, 1 o 2:"));
const victoriasFaltantes = victoriasNecesarias - victoriasActuales;
console.log("Faltan: " + victoriasFaltantes);
```

El objetivo no cambia; el marcador sí cambiará cuando empecemos a repetir rondas.

**Probá:**

Entrada: 0 → Faltan: 2
Entrada: 1 → Faltan: 1
Entrada: 2 → Faltan: 0

### Ejercicio 6. Una jugada al azar

```javascript
const numeroAleatorio = Math.random();
const jugadaComputadora = Math.floor(numeroAleatorio * 3) + 1;
console.log("Jugada de la computadora: " + jugadaComputadora);
```

No se puede anticipar qué número concreto saldrá. Se comprueba que siempre sea un entero del rango esperado.

**Probá:**

Sin entrada → Jugada de la computadora: 1, 2 o 3.
Ejecutá varias veces: puede repetirse un número; nunca debe salir 0, 4 o un decimal.

## Etapa 3. Funciones

### Ejercicio 7. Crear el saludo

```javascript
function crearSaludo(nombreJugador) {
  return "Hola, " + nombreJugador + ". Vamos a jugar.";
}

const nombreIngresado = prompt("Tu nombre:");
const mensajeSaludo = crearSaludo(nombreIngresado);
alert(mensajeSaludo);
```

nombreIngresado es el argumento; nombreJugador es el parámetro. El mensaje solo se ve porque el programa principal lo muestra.

**Probá:**

Entrada: Ana → Hola, Ana. Vamos a jugar.
También probá crearSaludo("Sol"): debe devolver el saludo para Sol.

### Ejercicio 8. Pedir desde una función

```javascript
function pedirJugadaSimple() {
  const entradaJugada = prompt("Elegí 1: piedra, 2: papel o 3: tijera:");
  const numeroJugada = Number(entradaJugada);
  return numeroJugada;
}

const jugadaJugador = pedirJugadaSimple();
console.log("Jugada elegida: " + jugadaJugador);
```

La pregunta aparece al llamar a la función, no al definirla. Todavía no controla errores ni cancelación: mejoraremos esa misma tarea en Repeticiones.

**Probá:**

Entrada: 2 → Jugada elegida: 2
Entrada: 3 → Jugada elegida: 3

### Ejercicio 9. Generar desde una función

```javascript
function generarJugadaComputadora() {
  return Math.floor(Math.random() * 3) + 1;
}

const jugadaComputadora = generarJugadaComputadora();
console.log("Jugada de la computadora: " + jugadaComputadora);
```

Esta función resuelve una tarea concreta. Más adelante la llamaremos una vez por ronda.

**Probá:**

Sin entrada → Jugada de la computadora: 1, 2 o 3.
Varias llamadas pueden devolver el mismo número.

## Etapa 4. Alternativas

### Ejercicio 10. Nombrar una jugada

```javascript
function obtenerNombreJugada(numeroJugada) {
  if (numeroJugada === 1) {
    return "Piedra";
  }
  if (numeroJugada === 2) {
    return "Papel";
  }
  if (numeroJugada === 3) {
    return "Tijera";
  }
  return "Jugada inválida";
}

const numeroIngresado = Number(prompt("Número de jugada:"));
console.log(obtenerNombreJugada(numeroIngresado));
```

No hace falta else después de una rama que retorna. El programa principal muestra el resultado, mientras la función decide qué texto corresponde.

**Probá:**

Entradas separadas: 1 → Piedra; 2 → Papel; 3 → Tijera; 4 → Jugada inválida.

### Ejercicio 11. Validar una jugada

```javascript
function validarJugada(numeroJugada) {
  return Number.isInteger(numeroJugada) &&
    numeroJugada >= 1 && numeroJugada <= 3;
}

const numeroIngresado = Number(prompt("Jugada para validar:"));
console.log(validarJugada(numeroIngresado));
```

La condición compuesta ya produce un booleano. Vacío se convierte en 0 y queda fuera del rango. Aquí Cancelar también se convierte en 0; en la siguiente etapa lo distinguiremos antes de convertir.

**Probá:**

Entradas separadas: 1 → true; 3 → true; 0 → false; 4 → false; 2.5 → false; abc → false; vacío → false.

### Ejercicio 12. Comparar dos jugadas

```javascript
function compararJugadas(jugadaJugador, jugadaComputadora) {
  if (jugadaJugador === jugadaComputadora) {
    return "Empate";
  }
  if (
    (jugadaJugador === 1 && jugadaComputadora === 3) ||
    (jugadaJugador === 2 && jugadaComputadora === 1) ||
    (jugadaJugador === 3 && jugadaComputadora === 2)
  ) {
    return "Victoria";
  }
  return "Derrota";
}

const jugadaJugador = Number(prompt("Jugada del jugador (1 a 3):"));
const jugadaComputadora = Number(prompt("Jugada de prueba de la computadora (1 a 3):"));
const resultadoRonda = compararJugadas(jugadaJugador, jugadaComputadora);
console.log(resultadoRonda);
```

Usamos dos entradas manuales para probar todos los casos. En el juego final, el segundo argumento vendrá de generarJugadaComputadora(). La función no cambia.

**Probá:**

Jugador / computadora: 1 / 3 → Victoria; 2 / 2 → Empate; 1 / 2 → Derrota.
Probá las nueve combinaciones: tres victorias, tres derrotas y tres empates.

## Etapa 5. Repeticiones

### Ejercicio 13. Anunciar rondas

```javascript
function mostrarRondas(cantidadRondas) {
  for (let numeroRonda = 1; numeroRonda <= cantidadRondas; numeroRonda++) {
    console.log("Ronda " + numeroRonda);
  }
}

mostrarRondas(3);
```

Esta función muestra, por eso no exige return. Anuncia una cantidad fija; el juego final repetirá mientras nadie tenga dos victorias, no solo tres vueltas.

**Probá:**

Con 3 → Ronda 1, Ronda 2 y Ronda 3, una por línea.
Con 0 → no muestra rondas.

### Ejercicio 14. Pedir hasta validar

```javascript
function validarJugada(numeroJugada) {
  return Number.isInteger(numeroJugada) &&
    numeroJugada >= 1 && numeroJugada <= 3;
}

function pedirJugada() {
  let numeroJugada;
  do {
    const entradaJugada = prompt("Elegí 1: piedra, 2: papel o 3: tijera. Cancelar para salir.");
    if (entradaJugada === null) {
      return null;
    }
    numeroJugada = Number(entradaJugada);
    if (!validarJugada(numeroJugada)) {
      alert("Ingresá un número entero entre 1 y 3.");
    }
  } while (!validarJugada(numeroJugada));
  return numeroJugada;
}

const jugadaJugador = pedirJugada();
if (jugadaJugador === null) {
  console.log("Juego cancelado");
} else {
  console.log("Jugada elegida: " + jugadaJugador);
}
```

El validador decide si sirve; pedirJugada controla cuántas veces preguntar. Vacío y espacios se convierten en 0 y se rechazan. return null permite cancelar sin quedar atrapado en el ciclo.

**Probá:**

Entradas: 2.5 / 2abc / vacío / 2 → tres avisos y Jugada elegida: 2.
Cancelar → Juego cancelado, sin nuevas preguntas.

### Ejercicio 15. Pedir un nombre usable

```javascript
function pedirNombre() {
  let nombreJugador;
  do {
    const entradaNombre = prompt("Tu nombre (al menos 3 caracteres). Cancelar para salir.");
    if (entradaNombre === null) {
      return null;
    }
    nombreJugador = entradaNombre.trim();
    if (nombreJugador.length < 3) {
      alert("Escribí al menos 3 caracteres.");
    }
  } while (nombreJugador.length < 3);
  return nombreJugador;
}

const nombreJugador = pedirNombre();
if (nombreJugador === null) {
  console.log("Inicio cancelado");
} else {
  console.log("Jugador: " + nombreJugador);
}
```

La longitud se mide después de quitar espacios en los extremos. El contrato de retorno es texto válido o null; quien llama decide cómo continuar.

**Probá:**

Entradas: espacios / Al / Ana → dos avisos y Jugador: Ana.
Entrada: «  Sol  » → Jugador: Sol.
Cancelar → Inicio cancelado.

## Etapa 6. Arreglos

### Ejercicio 16. Nombres en un arreglo

```javascript
function obtenerNombreJugada(numeroJugada) {
  const opcionesJuego = ["Piedra", "Papel", "Tijera"];
  return opcionesJuego[numeroJugada - 1];
}

const numeroIngresado = Number(prompt("Jugada válida: 1, 2 o 3:"));
console.log(obtenerNombreJugada(numeroIngresado));
```

La función conserva su nombre, entrada y salida para las jugadas válidas. Ahora el control de valores inválidos queda a cargo de pedirJugada antes de llamarla.

**Probá:**

Entradas separadas: 1 → Piedra; 2 → Papel; 3 → Tijera.

### Ejercicio 17. Guardar una ronda

```javascript
function agregarResultado(historialRondas, resultadoRonda) {
  historialRondas.push(resultadoRonda);
}

const historialRondas = [];
agregarResultado(historialRondas, "Victoria");
agregarResultado(historialRondas, "Empate");
agregarResultado(historialRondas, "Derrota");
console.log(historialRondas);
console.log("Rondas guardadas: " + historialRondas.length);
```

El parámetro permite trabajar sobre el mismo arreglo que creó el programa principal. Modificarlo es la tarea explícita de esta función.

**Probá:**

Sin entradas → ["Victoria", "Empate", "Derrota"] y Rondas guardadas: 3.
El arreglo debe conservar las tres entradas en ese orden.

### Ejercicio 18. Contar victorias

```javascript
function contarVictorias(resultadosRondas) {
  let cantidadVictorias = 0;
  for (let indiceRonda = 0; indiceRonda < resultadosRondas.length; indiceRonda++) {
    if (resultadosRondas[indiceRonda] === "Victoria") {
      cantidadVictorias = cantidadVictorias + 1;
    }
  }
  return cantidadVictorias;
}

const historialRondas = ["Victoria", "Empate", "Derrota", "Victoria"];
console.log("Victorias: " + contarVictorias(historialRondas));
```

Con un arreglo vacío no hay vueltas y el contador conserva el cero. La función calcula; el programa principal muestra.

**Probá:**

Historial de ejemplo → Victorias: 2.
Arreglo vacío → Victorias: 0.

## Etapa 7. Métodos de arreglos

### Ejercicio 19. Mostrar el historial

```javascript
function mostrarHistorial(resultadosRondas) {
  resultadosRondas.forEach(function(resultadoRonda, indiceRonda) {
    console.log("Ronda " + (indiceRonda + 1) + ": " + resultadoRonda);
  });
}

mostrarHistorial(["Victoria", "Empate", "Derrota"]);
```

El callback muestra una ronda; mostrarHistorial organiza el recorrido completo. Ninguna de las dos necesita retornar un valor.

**Probá:**

Ronda 1: Victoria
Ronda 2: Empate
Ronda 3: Derrota
Con [] no se muestra ninguna ronda.

### Ejercicio 20. Seleccionar victorias

```javascript
function obtenerVictorias(resultadosRondas) {
  return resultadosRondas.filter(function(resultadoRonda) {
    return resultadoRonda === "Victoria";
  });
}

const historialRondas = ["Victoria", "Empate", "Derrota", "Victoria"];
const rondasGanadas = obtenerVictorias(historialRondas);
console.log(rondasGanadas);
console.log("Victorias: " + rondasGanadas.length);
console.log("Original:", historialRondas);
```

Contar con for y obtener un arreglo con filter resuelven tareas distintas. Usamos length si después queremos la cantidad.

**Probá:**

Con ["Victoria", "Empate", "Derrota", "Victoria"] → ["Victoria", "Victoria"], cantidad 2.
Con ["Empate", "Derrota"] o [] → [], cantidad 0.

### Ejercicio 21. Traducir el historial

```javascript
function obtenerNombreJugada(numeroJugada) {
  const opcionesJuego = ["Piedra", "Papel", "Tijera"];
  return opcionesJuego[numeroJugada - 1];
}

function traducirJugadas(jugadasNumericas) {
  return jugadasNumericas.map(function(numeroJugada) {
    return obtenerNombreJugada(numeroJugada);
  });
}

const jugadasJugador = [1, 3, 2];
console.log(traducirJugadas(jugadasJugador));
console.log("Original:", jugadasJugador);
```

Una función reutiliza otra en cada vuelta. map conserva el orden y la cantidad. También podrías escribir el callback como numeroJugada => obtenerNombreJugada(numeroJugada).

**Probá:**

[1, 3, 2] → ["Piedra", "Tijera", "Papel"]
[] → []
El arreglo numérico no cambia.

## Etapa 8. Objetos literales

### Ejercicio 22. Crear un jugador

```javascript
function crearJugador(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0
  };
}

const nombreIngresado = prompt("Nombre del jugador:");
const jugador = crearJugador(nombreIngresado);
const computadora = crearJugador("Computadora");
console.log(jugador);
console.log(computadora);
```

Cada llamada crea un objeto distinto. Ambos tienen las mismas propiedades, pero conservan sus datos de manera independiente.

**Probá:**

Entrada: Ana → {nombre: "Ana", victorias: 0} y {nombre: "Computadora", victorias: 0}.

### Ejercicio 23. Actualizar el marcador

```javascript
function crearJugador(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0
  };
}

function registrarResultado(jugador, computadora, resultadoRonda) {
  if (resultadoRonda === "Victoria") {
    jugador.victorias = jugador.victorias + 1;
  } else if (resultadoRonda === "Derrota") {
    computadora.victorias = computadora.victorias + 1;
  }
}

const jugador = crearJugador("Ana");
const computadora = crearJugador("Computadora");
registrarResultado(jugador, computadora, "Victoria");
console.log(jugador.victorias + " a " + computadora.victorias);
registrarResultado(jugador, computadora, "Empate");
console.log(jugador.victorias + " a " + computadora.victorias);
registrarResultado(jugador, computadora, "Derrota");
console.log(jugador.victorias + " a " + computadora.victorias);
```

La función modifica las fichas que recibió. Un empate se registra en el historial del juego, pero no suma victorias.

**Probá:**

Después de Victoria → 1 a 0.
Después de Empate → 1 a 0.
Después de Derrota → 1 a 1.

### Ejercicio 24. Conectar el juego

```javascript
function jugarEncuentro() {
  const nombreJugador = pedirNombre();
  if (nombreJugador === null) {
    console.log("Inicio cancelado");
    return;
  }
  alert(crearSaludo(nombreJugador));
  const jugador = crearJugador(nombreJugador);
  const computadora = crearJugador("Computadora");
  const historialRondas = [];
  const jugadasJugador = [];

  while (jugador.victorias < 2 && computadora.victorias < 2) {
    const jugadaJugador = pedirJugada();
    if (jugadaJugador === null) {
      console.log("Encuentro cancelado. El marcador es parcial.");
      console.log(jugador.nombre + ": " + jugador.victorias + " / Computadora: " + computadora.victorias);
      mostrarHistorial(historialRondas);
      return;
    }
    const jugadaComputadora = generarJugadaComputadora();
    const resultadoRonda = compararJugadas(jugadaJugador, jugadaComputadora);
    registrarResultado(jugador, computadora, resultadoRonda);
    historialRondas.push(resultadoRonda);
    jugadasJugador.push(jugadaJugador);
    console.log(obtenerNombreJugada(jugadaJugador) + " contra " + obtenerNombreJugada(jugadaComputadora));
    alert(resultadoRonda);
  }

  if (jugador.victorias === 2) {
    alert("Ganó " + jugador.nombre);
  } else {
    alert("Ganó la computadora. ¡Suerte en la próxima!");
  }
  console.log("Marcador final: " + jugador.victorias + " a " + computadora.victorias);
  mostrarHistorial(historialRondas);
  console.log("Tus jugadas:", traducirJugadas(jugadasJugador));
  console.log("Tus victorias: " + obtenerVictorias(historialRondas).length);
}

// FUNCIONES DE APOYO
function crearSaludo(nombreJugador) {
  return "Hola, " + nombreJugador + ". Vamos a jugar.";
}

function pedirNombre() {
  let nombreJugador;
  do {
    const entradaNombre = prompt("Tu nombre (al menos 3 caracteres). Cancelar para salir.");
    if (entradaNombre === null) {
      return null;
    }
    nombreJugador = entradaNombre.trim();
    if (nombreJugador.length < 3) {
      alert("Escribí al menos 3 caracteres.");
    }
  } while (nombreJugador.length < 3);
  return nombreJugador;
}

function validarJugada(numeroJugada) {
  return Number.isInteger(numeroJugada) &&
    numeroJugada >= 1 && numeroJugada <= 3;
}

function pedirJugada() {
  let numeroJugada;
  do {
    const entradaJugada = prompt("Elegí 1: piedra, 2: papel o 3: tijera. Cancelar para salir.");
    if (entradaJugada === null) {
      return null;
    }
    numeroJugada = Number(entradaJugada);
    if (!validarJugada(numeroJugada)) {
      alert("Ingresá un número entero entre 1 y 3.");
    }
  } while (!validarJugada(numeroJugada));
  return numeroJugada;
}

function generarJugadaComputadora() {
  return Math.floor(Math.random() * 3) + 1;
}

function obtenerNombreJugada(numeroJugada) {
  const opcionesJuego = ["Piedra", "Papel", "Tijera"];
  return opcionesJuego[numeroJugada - 1];
}

function compararJugadas(jugadaJugador, jugadaComputadora) {
  if (jugadaJugador === jugadaComputadora) {
    return "Empate";
  }
  if (
    (jugadaJugador === 1 && jugadaComputadora === 3) ||
    (jugadaJugador === 2 && jugadaComputadora === 1) ||
    (jugadaJugador === 3 && jugadaComputadora === 2)
  ) {
    return "Victoria";
  }
  return "Derrota";
}

function crearJugador(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0
  };
}

function registrarResultado(jugador, computadora, resultadoRonda) {
  if (resultadoRonda === "Victoria") {
    jugador.victorias = jugador.victorias + 1;
  } else if (resultadoRonda === "Derrota") {
    computadora.victorias = computadora.victorias + 1;
  }
}

function mostrarHistorial(resultadosRondas) {
  resultadosRondas.forEach(function(resultadoRonda, indiceRonda) {
    console.log("Ronda " + (indiceRonda + 1) + ": " + resultadoRonda);
  });
}

function obtenerVictorias(resultadosRondas) {
  return resultadosRondas.filter(function(resultadoRonda) {
    return resultadoRonda === "Victoria";
  });
}

function traducirJugadas(jugadasNumericas) {
  return jugadasNumericas.map(function(numeroJugada) {
    return obtenerNombreJugada(numeroJugada);
  });
}

// PROGRAMA PRINCIPAL
jugarEncuentro();
```

El integrador conecta contratos conocidos. Los empates pueden hacer que haya más de tres rondas: gana quien consigue dos victorias. Mientras exista un empate tras otro el encuentro continúa, y siempre se puede cancelar. Las funciones declaradas pueden llamarse aunque estén escritas más abajo en el archivo.

**Probá:**

Para una prueba predecible, cambiá temporalmente el cuerpo de generarJugadaComputadora por return 3.
Nombre Ana; jugadas 3 / 1 / 1 → Empate, Victoria, Victoria; gana Ana, 2 a 0.
Con la misma computadora fija, 2 / 2 → dos derrotas; gana la computadora, 0 a 2.
Cancelar el nombre → Inicio cancelado. Cancelar una jugada → marcador parcial, sin ganador.
Después restaurá la función aleatoria.

## Cómo se conectan las piezas

1. Entrada y salida: nombre, rival y elección del jugador.
2. Datos: marcador, objetivo de dos victorias y número aleatorio del 1 al 3.
3. Funciones: crearSaludo, pedirJugadaSimple y generarJugadaComputadora.
4. Alternativas: obtenerNombreJugada, validarJugada y compararJugadas.
5. Repeticiones: pedirJugada mejora la versión simple; pedirNombre completa la bienvenida.
6. Arreglos: nombres de jugadas, historial y cantidad de victorias.
7. Métodos: mostrarHistorial, obtenerVictorias y traducirJugadas.
8. Objetos: crearJugador, registrarResultado y jugarEncuentro.

## Contratos para conectar las funciones

- crearSaludo(nombreJugador): recibe texto y retorna un saludo; no lo muestra.
- pedirNombre(): pregunta y retorna un nombre limpio de al menos tres caracteres, o null al cancelar. Validamos longitud, no que contenga solamente letras.
- validarJugada(numeroJugada): recibe un número y retorna true o false.
- pedirJugada(): utiliza el validador y retorna 1, 2, 3 o null al cancelar.
- generarJugadaComputadora(): retorna 1, 2 o 3 al azar.
- obtenerNombreJugada(numeroJugada): recibe una jugada válida y retorna su nombre. La versión con arreglos supone que pedirJugada ya la validó.
- compararJugadas(jugadaJugador, jugadaComputadora): recibe dos jugadas válidas y retorna Victoria, Derrota o Empate, desde el punto de vista del jugador.
- crearJugador(nombreJugador): retorna una ficha con nombre y victorias inicialmente en cero.
- registrarResultado(jugador, computadora, resultadoRonda): modifica las victorias de las fichas; no necesita retornar un valor.
- mostrarHistorial(resultadosRondas): muestra cada resultado con forEach.
- obtenerVictorias(resultadosRondas): retorna un arreglo filtrado; su length indica la cantidad de victorias.
- traducirJugadas(jugadasNumericas): retorna un arreglo de nombres usando map.
- jugarEncuentro(): coordina la entrada, las rondas y el resumen.

## Relación con el juego del viernes

El ejemplo de clase junta la obtención de las jugadas y su comparación. En esta práctica, compararJugadas recibe las dos jugadas como parámetros: así se pueden probar sus nueve combinaciones sin depender del azar. jugarEncuentro se ocupa de conseguirlas y pasarlas a la comparación.

Los resultados de esta versión son exactamente Victoria, Derrota y Empate. No se mezclan con los mensajes con emojis del ejemplo original: el historial, el filtro y el marcador comparten los mismos textos.

Al mejor de tres significa alcanzar dos victorias. Los empates no suman, por lo que puede haber más de tres rondas. Cancelar termina el encuentro sin anunciar un ganador y conserva la salida del marcador parcial.

Para probar el integrador, reemplazá temporalmente el retorno de generarJugadaComputadora por 3: con las jugadas 3, 1 y 1 deben aparecer Empate, Victoria y Victoria. Después restaurá el número aleatorio. Probá también perder, cancelar y corregir una entrada inválida.

## Antes de pasar a DOM

El estudiante debería poder explicar qué recibe y qué devuelve cada función, identificar qué funciones muestran mensajes o modifican datos, probar las nueve comparaciones y explicar por qué un empate no acerca a nadie a las dos victorias. DOM será otra forma de ingresar y mostrar datos; las reglas de comparación se pueden reutilizar.

