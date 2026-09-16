# ODAWI · Resoluciones explicadas

Usá este documento después de intentar los ejercicios. Primero, 24 ejercicios de preparación, con objetos literales en el nivel 8. Después, 24 ejercicios para construir exactamente el código de clase y resolver la mesa de trabajo.

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

### Ejercicio 22. Crear una ficha

```javascript
function crearFicha(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0,
    derrotas: 0,
    empates: 0
  }
}

const nombreJugador = prompt('Nombre del jugador:')
const fichaJugador = crearFicha(nombreJugador)
console.log(fichaJugador)
console.log(fichaJugador.nombre)
```

Cada llamada crea una ficha nueva. El parámetro se guarda en la propiedad nombre; las cantidades son números, no textos.

**Probá:**

Ana → {nombre: "Ana", victorias: 0, derrotas: 0, empates: 0}, y después Ana. Creá otra ficha para Luis: debe ser un objeto independiente.

### Ejercicio 23. Registrar los tres resultados

```javascript
function crearFicha(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0,
    derrotas: 0,
    empates: 0
  }
}

function actualizarFicha(fichaJugador, resultadoPartida) {
  if (resultadoPartida == 'Gana el jugador 👶🏻') {
    fichaJugador.victorias = fichaJugador.victorias + 1
  } else if (resultadoPartida == 'Gana la PC 🤖') {
    fichaJugador.derrotas = fichaJugador.derrotas + 1
  } else if (resultadoPartida == 'Empate 🫱🏻🫲🏻') {
    fichaJugador.empates = fichaJugador.empates + 1
  }
}

const fichaJugador = crearFicha('Ana')
actualizarFicha(fichaJugador, 'Gana el jugador 👶🏻')
actualizarFicha(fichaJugador, 'Empate 🫱🏻🫲🏻')
actualizarFicha(fichaJugador, 'Gana la PC 🤖')
actualizarFicha(fichaJugador, 'Gana el jugador 👶🏻')
console.log(fichaJugador)
```

La función modifica el objeto recibido. No necesita retornar otro objeto: la variable fichaJugador sigue apuntando a la ficha actualizada.

**Probá:**

Victoria, empate, derrota y victoria → nombre Ana, victorias 2, derrotas 1, empates 1. Una ficha nueva sigue en cero. Un resultado desconocido deja los valores iguales.

### Ejercicio 24. Construir un resumen

```javascript
function crearFicha(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0,
    derrotas: 0,
    empates: 0
  }
}

function actualizarFicha(fichaJugador, resultadoPartida) {
  if (resultadoPartida == 'Gana el jugador 👶🏻') {
    fichaJugador.victorias = fichaJugador.victorias + 1
  } else if (resultadoPartida == 'Gana la PC 🤖') {
    fichaJugador.derrotas = fichaJugador.derrotas + 1
  } else if (resultadoPartida == 'Empate 🫱🏻🫲🏻') {
    fichaJugador.empates = fichaJugador.empates + 1
  }
}

function crearResumen(fichaJugador) {
  const partidasJugadas = fichaJugador.victorias + fichaJugador.derrotas + fichaJugador.empates
  return {
    nombre: fichaJugador.nombre,
    partidasJugadas: partidasJugadas,
    tieneVictorias: fichaJugador.victorias > 0
  }
}

const fichaJugador = crearFicha('Ana')
console.log(crearResumen(fichaJugador))
actualizarFicha(fichaJugador, 'Gana el jugador 👶🏻')
actualizarFicha(fichaJugador, 'Empate 🫱🏻🫲🏻')
actualizarFicha(fichaJugador, 'Gana la PC 🤖')
console.log(crearResumen(fichaJugador))
console.log(fichaJugador)
```

El resumen combina texto, número y booleano. A diferencia de actualizarFicha, esta función no modifica la ficha: crea y retorna un objeto distinto.

**Probá:**

Ficha nueva → {nombre: "Ana", partidasJugadas: 0, tieneVictorias: false}. Tras victoria, empate y derrota → {nombre: "Ana", partidasJugadas: 3, tieneVictorias: true}. La ficha original conserva sus cuatro propiedades.

## Etapa 9. Entrada y nombre

### Ejercicio 25. Pedir y mostrar

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

let nombre = prompt('Ingrese su nombre por favor: ')
console.log(nombre)
```

Todavía preguntamos una sola vez. El validador está disponible, pero aún no lo llamamos.

**Probá:**

Ana → Ana en Resultados. Cancelar → null.

### Ejercicio 26. Usar el validador dado

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

let nombre = prompt('Ingrese su nombre por favor: ')
console.log(validarNombre(nombre))
```

El argumento nombre entra en la función; return devuelve el booleano. Aún no repetimos la pregunta.

**Probá:**

Ana → true. Al, 123, vacío o Cancelar → aviso y false.

### Ejercicio 27. Construir los mensajes

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

alert('Bienvenido al piedra, papel o tijera de Front 2 :D')
let nombre = prompt('Ingrese su nombre por favor: ')
console.log(validarNombre(nombre))
alert('Gracias por jugar ' + nombre + '. Mucha suerte')
console.log('El jugador es: ' + nombre)
```

Esta es una prueba de mensajes, no la versión final: aún falta repetir cuando la validación falla.

**Probá:**

Ana → bienvenida, true, Gracias por jugar Ana. Mucha suerte y El jugador es: Ana.

## Etapa 10. La función iniciarJuego

### Ejercicio 28. Definir y llamar

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

function iniciarJuego() {
  alert('Bienvenido al piedra, papel o tijera de Front 2 :D')
}

iniciarJuego()
```

La definición reúne instrucciones; la llamada las pone en marcha.

**Probá:**

Una ejecución → una bienvenida. Si no la llamás, no aparece.

### Ejercicio 29. Repetir hasta validar

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

function iniciarJuego() {
  alert('Bienvenido al piedra, papel o tijera de Front 2 :D')

  let nombre

  do {
    nombre = prompt('Ingrese su nombre por favor: ')
  } while (!validarNombre(nombre))

}

iniciarJuego()
```

La repetición continúa mientras validarNombre devuelve false. Cancelar devuelve null y por eso no termina el pedido; el botón Detener del laboratorio permite frenar la ejecución.

**Probá:**

Al → aviso y nueva pregunta; luego Ana → termina. Cancelar también vuelve a preguntar.

### Ejercicio 30. Saludar y retornar

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

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

const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
```

El nombre original se usa en los primeros mensajes. El valor retornado es el que guarda nombreJugador, en mayúsculas.

**Probá:**

Ana → consola El jugador es: Ana; último alert Gracias por jugar :ANA.

## Etapa 11. Validar una jugada

### Ejercicio 31. Armar la condición

```javascript
let eleccion = 2
console.log(!isNaN(eleccion) && eleccion > 0 && eleccion < 4)
```

Mantenemos la condición del ejemplo. Más adelante pedirJugada convierte la entrada con parseInt antes de llamar al validador.

**Probá:**

2 → true; 0, 4 y NaN → false. 2.5 → true: esta condición verifica rango, no enteros.

### Ejercicio 32. Retornar true o false

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  return false
}

console.log(validarJugada(2))
console.log(validarJugada(0))
console.log(validarJugada(NaN))
```

La función recibe un número y devuelve un booleano. Si retorna true, ya no llega al return false.

**Probá:**

Las llamadas dadas deben mostrar true, false y false.

### Ejercicio 33. Avisar el error

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
}

console.log(validarJugada(0))
```

Solo llegan al aviso las entradas que no retornaron true. No agregamos otra condición ni cambiamos los operadores.

**Probá:**

1, 2 y 3 → true sin alert. 0, 4 y NaN → Ingrese un NUMERO entre 1 y 3, y false.

## Etapa 12. Pedir una jugada

### Ejercicio 34. Convertir el dato

```javascript
function pedirJugada() {
  let eleccion = 0
  //1 piedra, 2 papel, 3 para tijera
    eleccion = parseInt(
      prompt('Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera')
    )
  return eleccion
}

console.log(pedirJugada())
```

Esta versión parcial pregunta una vez. Si el texto no empieza con un número, la conversión produce NaN.

**Probá:**

2 → número 2. hola → NaN. 2abc → 2.

### Ejercicio 35. Repetir con el validador

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
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

console.log(pedirJugada())
```

La función no retorna hasta recibir una elección que pase el validador. Cancelar se convierte en NaN y vuelve a preguntar.

**Probá:**

0, hola, 4 y finalmente 2 → tres avisos, cuatro preguntas y resultado 2.

### Ejercicio 36. Conectar las dos entradas

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

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

function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
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

const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
console.log(pedirJugada())
```

Las definiciones incluidas son las resoluciones de las actividades anteriores. Vos escribís la coordinación.

**Probá:**

Al, Ana, 0, 3 → corrige el nombre, corrige la jugada y termina mostrando 3.

## Etapa 13. La jugada de la PC

### Ejercicio 37. Observar el azar

```javascript
function jugadaRandom() {
  let numero = Math.random()
  return numero
}

console.log(jugadaRandom())
```

Cada ejecución puede producir un valor diferente. No se espera un resultado concreto.

**Probá:**

Podrías obtener 0.17 o 0.82. Todavía no son jugadas.

### Ejercicio 38. Transformar el intervalo

```javascript
function jugadaRandom() {
  let numero = Math.random() * 3 + 1
  return numero
}

console.log(jugadaRandom())
```

Todavía pueden aparecer decimales. El siguiente paso completa la expresión del ejemplo.

**Probá:**

Siempre debe ser >= 1 y < 4; por ejemplo, 1.51 o 3.8.

### Ejercicio 39. Retornar 1, 2 o 3

```javascript
function jugadaRandom() {
  let numero = parseInt(Math.random() * 3 + 1)
  return numero
}

console.log(jugadaRandom())
```

Los tres intervalos se convierten en las tres opciones del rival.

**Probá:**

Solo 1, 2 o 3. Pueden repetirse; no tienen que aparecer todos en pocas pruebas.

## Etapa 14. Preparar la comparación

### Ejercicio 40. Guardar los resultados

```javascript
function compararJugadas() {
  const resultadosPosibles = [
    'Gana el jugador 👶🏻', //Posicion 0 gano
    'Empate 🫱🏻🫲🏻', //posicion 1 empate
    'Gana la PC 🤖' // posicion 2 gana pc
  ]
  return resultadosPosibles[1]
}

console.log(compararJugadas())
```

El retorno fijo es solo una prueba del arreglo. En los próximos pasos la jugada decidirá la posición.

**Probá:**

Posición 0 → Gana el jugador 👶🏻; 1 → Empate 🫱🏻🫲🏻; 2 → Gana la PC 🤖.

### Ejercicio 41. Obtener ambas jugadas

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
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

}

compararJugadas()
```

compararJugadas consigue los datos que necesita. No recibe jugadas como parámetros.

**Probá:**

Ingresá 1: aparece Jugada de la PC: con 1, 2 o 3. Todavía no se anuncia ganador.

### Ejercicio 42. Resolver el empate

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
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
  }
}

console.log(compararJugadas())
```

El return termina la comparación cuando hay empate. undefined en los otros casos indica la parte que todavía falta construir.

**Probá:**

Ambos 2 → Empate 🫱🏻🫲🏻. Si son distintos, esta versión parcial devuelve undefined.

## Etapa 15. Completar la partida

### Ejercicio 43. Reconocer las victorias

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
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
}

console.log(compararJugadas())
```

La plantilla usa false como lugar temporal para que puedas escribir la condición. Reemplazá también ese false. La solución retorna la posición 0 solo cuando gana el jugador.

**Probá:**

Fijá temporalmente la PC en 3: jugador 1 → Gana el jugador 👶🏻; jugador 3 → empate. La derrota aún devuelve undefined.

### Ejercicio 44. Derrota por descarte

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
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

console.log(compararJugadas())
```

Si no hubo empate ni victoria del jugador, gana la PC. compararJugadas ya está completa.

**Probá:**

Jugador/PC: 1/1 empate, 1/2 PC, 1/3 jugador; 2/1 jugador, 2/2 empate, 2/3 PC; 3/1 PC, 3/2 jugador, 3/3 empate.

### Ejercicio 45. El programa de clase

```javascript
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

const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
console.log(compararJugadas())
```

Este es el punto de llegada al código de clase, antes de resolver la mesa de trabajo. Se juega una partida y el resultado se muestra por consola.

**Probá:**

Ana y una jugada válida → bienvenida, agradecimientos, nombre en consola, jugada de la PC y resultado en consola.

## Etapa 16. Mesa de trabajo

### Ejercicio 46. Mostrar el resultado

```javascript
function mostrarResultado(resultadoPartida) {
  console.log(resultadoPartida)
  alert(resultadoPartida)
}

mostrarResultado('Gana el jugador 👶🏻')
mostrarResultado('Empate 🫱🏻🫲🏻')
mostrarResultado('Gana la PC 🤖')
```

La función recibe el mensaje ya calculado. Estas llamadas con textos fijos sirven para probarla sin depender del azar.

**Probá:**

Cada uno de los tres textos aparece dos veces: una salida de consola y una alerta.

### Ejercicio 47. Alentar al perder

```javascript
function mostrarResultado(resultadoPartida) {
  console.log(resultadoPartida)
  alert(resultadoPartida)
  if (resultadoPartida == 'Gana la PC 🤖') {
    alert('¡Ánimo! Mucha suerte en la próxima oportunidad.')
  }
}

mostrarResultado('Gana el jugador 👶🏻')
mostrarResultado('Empate 🫱🏻🫲🏻')
mostrarResultado('Gana la PC 🤖')
```

Los cuatro puntos de la mesa están resueltos. El texto de aliento es una propuesta; la consigna permite escribir otro equivalente.

**Probá:**

Victoria y empate → dos salidas cada uno. Derrota → esas dos salidas y una tercera alerta de aliento.

### Ejercicio 48. Usarla en el juego

```javascript
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
```

La única adaptación del programa principal es pasar el resultado a la nueva función. El resto de la solución conserva nombres, operadores, mensajes y forma de resolver del código de clase.

**Probá:**

La partida pide nombre y una jugada válida; muestra el resultado en consola y alerta. Si gana la PC, agrega el aliento. No debe pedir una segunda jugada válida.

## El punto de llegada del recorrido Código de clase

Dentro del recorrido adicional, el ejercicio 45 reproduce el programa de clase con iniciarJuego, pedirJugada, jugadaRandom, compararJugadas, validarNombre y validarJugada. compararJugadas no recibe parámetros: obtiene las jugadas llamando a pedirJugada y jugadaRandom. Devuelve exactamente Gana el jugador 👶🏻, Empate 🫱🏻🫲🏻 o Gana la PC 🤖.

Se conservan parseInt, isNaN, ==, do...while y toLocaleUpperCase. validarJugada comprueba el rango; pedirJugada convierte con parseInt antes de validar. Por eso 2abc y 2.5 ingresados en prompt se convierten en 2, como en la referencia. validarNombre se utiliza tal como está dada, sin agregar otras condiciones.

## Mesa de trabajo

1. Crear una función que reciba como parámetro el texto del resultado.
2. Mostrarlo por consola.
3. Mostrarlo mediante una alerta.
4. Si hubo derrota, agregar una alerta de aliento y suerte para la próxima oportunidad.

Los ejercicios 46 a 48 resuelven esta consigna con mostrarResultado(resultadoPartida). Al integrarla, la última línea pasa de console.log(compararJugadas()) a mostrarResultado(compararJugadas()). Se compara una sola vez. Las seis funciones originales se conservan.

## Antes de pasar a DOM

Explicá por qué el pedido se repite cuando la validación falla, qué retorna cada función, cómo se elige una posición del arreglo y por qué el aliento aparece solo al perder. Probá las nueve combinaciones de jugadas.

