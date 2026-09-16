# ODAWI · Volver a programar

16 etapas · 48 ejercicios · preparación y código de clase

## Cómo trabajar

Completá los TODO, anticipá las salidas y ejecutá los casos propuestos antes de consultar cada resolución. El editor conserva colores y sugerencias. prompt pide datos dentro de la página; alert abre una ventana con estilo que espera Aceptar; console.log aparece en Resultados. Los borradores duran mientras la página esté abierta.

## Orden de trabajo

Preparación, niveles 1 a 8 (ejercicios 1 a 24): entrada y salida, datos, funciones, alternativas, repeticiones, arreglos, métodos y objetos. Se conservan los primeros siete niveles. El nivel 8 tiene tres ejercicios de objetos literales con funciones: crear una ficha, registrar resultados y construir un resumen. Usan los mensajes del juego como preparación, sin modificar el código final de clase.

Código de clase (ejercicios 25 a 48): el recorrido adicional comienza con validarNombre dada y construye exactamente el código del docente. Termina con la mesa de trabajo.

Cada ejercicio es independiente e incluye las funciones de apoyo que necesita. Los recorridos usan implementaciones diferentes: seguí los nombres, mensajes y comportamiento de la consigna actual. En el original Cancelar permite salir; en el código de clase vuelve a preguntar. Podés interrumpir una ejecución con Detener.

## Ayudas del editor

El editor usa colores tipo One Dark: textos en verde, palabras clave en violeta, números en naranja y comentarios en gris. Los nombres y propiedades también se diferencian con color.

Las sugerencias aparecen mientras escribís. También podés abrirlas con Ctrl + Espacio o con el botón Sugerencias. Elegí con las flechas, aceptá con Enter o Tab y cerrá con Esc. Ctrl + Enter ejecuta el programa. El editor cierra automáticamente comillas, paréntesis, corchetes y llaves. Las sugerencias completan nombres; no verifican si la solución es correcta.

## Etapa 1. Entrada y salida · Preparación · niveles 1 a 8

Preguntá, guardá y mostrá los primeros datos del juego.

### Recordatorio

prompt() devuelve texto o null al cancelar. const guarda un dato que no vas a reasignar. + une textos. alert() y console.log() muestran mensajes; en este laboratorio aparecen en Resultados. Por ahora suponé que se escriben los datos pedidos. Todavía no vamos a definir funciones propias.

```javascript
const nombreJugador = prompt("¿Cómo te llamás?");
console.log("Jugador: " + nombreJugador);
```

### Ejercicio 1. Tu primer saludo

Dale la bienvenida a quien va a jugar.

**Para el juego:** La bienvenida será la primera parte del juego.

1. Pedí el nombre y guardalo en nombreJugador.
2. Mostrá «Hola, [nombre]. Bienvenido a ODAWI» con alert().
3. Mostrá el nombre también con console.log().

**Casos de prueba**

Entrada: Ana → Hola, Ana. Bienvenido a ODAWI.
Consola: Ana

**Pista:** Usá la variable sin comillas dentro de la concatenación.

**Plantilla para completar**

```javascript
// Pedí y guardá el nombre.

// Mostrá el saludo y el nombre.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 2. Presentar el duelo

Identificá al jugador y a su rival.

**Para el juego:** El rival del juego será siempre la computadora.

1. Pedí el nombre del jugador.
2. Guardá el texto «Computadora» en nombreRival, sin pedirlo.
3. Mostrá «[jugador] juega contra [rival]».

**Casos de prueba**

Entrada: Luz → Luz juega contra Computadora.

**Pista:** Uno de los datos viene de prompt; el otro es un texto fijo.

**Plantilla para completar**

```javascript
// Pedí el nombre del jugador.

// Guardá el nombre del rival y presentá el duelo.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 3. Pedir una elección

Preguntá qué quiere jugar la persona, usando palabras.

**Para el juego:** Preparás la entrada de una jugada.

1. Pedí una elección: piedra, papel o tijera. Suponé una respuesta válida.
2. Guardala en eleccionIngresada.
3. Mostrá «Elegiste: [elección]». Todavía no decidas quién gana.

**Casos de prueba**

Entrada: piedra → Elegiste: piedra
Entrada: tijera → Elegiste: tijera

**Pista:** En esta actividad la elección es texto. Más adelante usaremos números.

**Plantilla para completar**

```javascript
// Pedí una elección y mostrá lo que escribió el jugador.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 2. Datos y operaciones · Preparación · niveles 1 a 8

Calculá el marcador y descubrí cómo generar una jugada al azar.

### Recordatorio

Number(texto) convierte texto numérico. Con números, + suma; con texto, concatena. Usamos string, number y, más adelante, boolean (true/false). Math.random() da un número entre 0 incluido y 1 excluido; Math.floor() redondea hacia abajo. Suponemos entradas numéricas válidas en esta etapa.

```javascript
const victoriasJugador = Number(prompt("Victorias del jugador:"));
const victoriasComputadora = 1;
console.log(victoriasJugador + victoriasComputadora);
```

### Ejercicio 4. Sumar victorias

Contá cuántas rondas tuvieron un ganador.

**Para el juego:** Reconocés qué representan los valores del marcador.

1. Pedí las victorias del jugador y convertí la respuesta con Number().
2. Pedí y convertí las victorias de la computadora.
3. Sumalas en rondasConGanador y mostrá el total.

**Casos de prueba**

Entradas: 1 / 2 → Rondas con ganador: 3
Entradas: 0 / 1 → Rondas con ganador: 1

**Pista:** Convertí antes de sumar, para evitar unir dos textos.

**Plantilla para completar**

```javascript
// Pedí las dos cantidades.

// Sumá y mostrá.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 5. Llegar a dos

Calculá cuántas victorias le faltan al jugador para ganar el encuentro.

**Para el juego:** En un encuentro al mejor de tres, gana quien obtiene dos victorias. Los empates no suman.

1. Guardá 2 en victoriasNecesarias.
2. Pedí victoriasActuales: suponé que ingresan 0, 1 o 2.
3. Restá las victorias actuales a las necesarias y mostrá el resultado.

**Casos de prueba**

Entrada: 0 → Faltan: 2
Entrada: 1 → Faltan: 1
Entrada: 2 → Faltan: 0

**Pista:** Usá una variable para el objetivo y otra para el estado actual.

**Plantilla para completar**

```javascript
const victoriasNecesarias = 2;

// Pedí las victorias actuales y calculá cuántas faltan.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 6. Una jugada al azar

Generá la elección numérica de la computadora.

**Para el juego:** Ya tenés la cuenta que decidirá la jugada del rival.

1. Guardá Math.random() en numeroAleatorio.
2. Multiplicá por 3, redondeá con Math.floor() y sumá 1.
3. Guardá el resultado en jugadaComputadora y mostralo. La codificación será 1: piedra, 2: papel, 3: tijera.

**Casos de prueba**

Sin entrada → Jugada de la computadora: 1, 2 o 3.
Ejecutá varias veces: puede repetirse un número; nunca debe salir 0, 4 o un decimal.

**Pista:** Math.floor(numeroAleatorio * 3) produce 0, 1 o 2. El + 1 desplaza ese rango.

**Plantilla para completar**

```javascript
const numeroAleatorio = Math.random();

// Convertí ese valor en un entero entre 1 y 3 y mostralo.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 3. Funciones · Preparación · niveles 1 a 8

Convertí las tareas conocidas en piezas que puedas llamar y reutilizar.

### Recordatorio

Definir no es ejecutar: una función necesita una llamada. Los parámetros reciben datos; los argumentos son los valores que pasás al llamar. return entrega un resultado y termina esa llamada. Mostrar no equivale a retornar. Una función también puede no recibir parámetros y pedir datos o generar un número. En esta etapa no usamos if ni repeticiones.

```javascript
function sumarVictorias(victoriasJugador, victoriasComputadora) {
  return victoriasJugador + victoriasComputadora;
}
const rondasConGanador = sumarVictorias(1, 2);
console.log(rondasConGanador);
```

### Ejercicio 7. Crear el saludo

Transformá la bienvenida en una función con parámetro y retorno.

**Para el juego:** crearSaludo será reutilizada por el juego final.

1. Definí crearSaludo(nombreJugador). Debe retornar «Hola, [nombre]. Vamos a jugar».
2. Fuera de la función, pedí un nombre válido.
3. Llamá a crearSaludo con el nombre recibido, guardá el retorno y mostralo.

**Casos de prueba**

Entrada: Ana → Hola, Ana. Vamos a jugar.
También probá crearSaludo("Sol"): debe devolver el saludo para Sol.

**Pista:** La función arma el texto; el programa principal se ocupa de pedir el nombre y mostrarlo.

**Plantilla para completar**

```javascript
function crearSaludo(nombreJugador) {
  // Retorná el saludo.
}

// Pedí un nombre, llamá a la función y mostrá el retorno.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 8. Pedir desde una función

Encapsulá una pregunta y su conversión.

**Para el juego:** Es la primera versión de pedirJugada.

1. Definí pedirJugadaSimple(), sin parámetros.
2. Dentro, pedí 1, 2 o 3 con prompt(), convertí a número y retornalo. Suponé una entrada válida.
3. Fuera, llamá a la función, guardá su retorno y mostralo.

**Casos de prueba**

Entrada: 2 → Jugada elegida: 2
Entrada: 3 → Jugada elegida: 3

**Pista:** La función obtiene el dato por prompt, por eso no necesita recibirlo como parámetro.

**Plantilla para completar**

```javascript
function pedirJugadaSimple() {
  // Pedí, convertí y retorná.
}

// Llamá a la función y mostrá la jugada.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 9. Generar desde una función

Reutilizá la cuenta aleatoria de la etapa anterior.

**Para el juego:** La jugada del rival ya es una pieza independiente.

1. Definí generarJugadaComputadora(), sin parámetros.
2. Retorná un entero aleatorio entre 1 y 3 usando la cuenta ya practicada.
3. Llamá a la función y mostrá su retorno. No pongas prompt ni console.log dentro de ella.

**Casos de prueba**

Sin entrada → Jugada de la computadora: 1, 2 o 3.
Varias llamadas pueden devolver el mismo número.

**Pista:** Una función puede producir un valor sin recibir argumentos.

**Plantilla para completar**

```javascript
function generarJugadaComputadora() {
  // Retorná un entero aleatorio entre 1 y 3.
}

// Llamá y mostrá.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 4. Alternativas · Preparación · niveles 1 a 8

Hacé que las funciones elijan qué resultado devolver.

### Recordatorio

if ejecuta un bloque si su condición es verdadera. else cubre otro caso. === compara sin convertir tipos; && exige todas las condiciones y || acepta al menos una. Number.isInteger() verifica enteros. Una función puede tener varios return, pero cada llamada se detiene en el primero que alcanza. Los resultados de una ronda siempre serán "Victoria", "Derrota" o "Empate", desde el punto de vista del jugador.

```javascript
function alcanzoObjetivo(victoriasJugador) {
  if (victoriasJugador >= 2) {
    return true;
  }
  return false;
}
console.log(alcanzoObjetivo(1));
```

### Ejercicio 10. Nombrar una jugada

Decidí qué texto corresponde a un número.

**Para el juego:** Permite mostrar jugadas comprensibles en lugar de números.

1. Creá obtenerNombreJugada(numeroJugada).
2. Retorná «Piedra» para 1, «Papel» para 2 y «Tijera» para 3.
3. Para cualquier otro valor retorná «Jugada inválida».
4. En el programa principal pedí un número, llamá a la función y mostrá su retorno.

**Casos de prueba**

Entradas separadas: 1 → Piedra; 2 → Papel; 3 → Tijera; 4 → Jugada inválida.

**Pista:** Usá if para cada opción y un return final para lo que no coincidió.

**Plantilla para completar**

```javascript
function obtenerNombreJugada(numeroJugada) {
  // Elegí qué nombre retornar.
}

// Pedí un número y mostrá el retorno de la función.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 11. Validar una jugada

Escribí una función que responda una pregunta con true o false.

**Para el juego:** El mismo validador se usará para volver a pedir entradas incorrectas.

1. Creá validarJugada(numeroJugada), que reciba un número.
2. Retorná true solo si es entero y está entre 1 y 3, inclusive. En los demás casos retorná false.
3. Pedí un valor fuera de la función, convertí y mostrá el booleano retornado. No repitas todavía.

**Casos de prueba**

Entradas separadas: 1 → true; 3 → true; 0 → false; 4 → false; 2.5 → false; abc → false; vacío → false.

**Pista:** Podés retornar directamente Number.isInteger(numeroJugada) && numeroJugada >= 1 && numeroJugada <= 3.

**Plantilla para completar**

```javascript
function validarJugada(numeroJugada) {
  // Retorná un booleano.
}

// Pedí, convertí y probá el validador.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 12. Comparar dos jugadas

Decidí el resultado de una ronda sin preguntar dentro de la función.

**Para el juego:** Es la regla central del juego, separada de la entrada y la salida.

1. Creá compararJugadas(jugadaJugador, jugadaComputadora); recibirá dos números válidos del 1 al 3.
2. Si son iguales, retorná «Empate».
3. Si el jugador gana (1 contra 3, 2 contra 1 o 3 contra 2), retorná «Victoria».
4. En los demás casos retorná «Derrota». Probala con dos prompts en el programa principal.

**Casos de prueba**

Jugador / computadora: 1 / 3 → Victoria; 2 / 2 → Empate; 1 / 2 → Derrota.
Probá las nueve combinaciones: tres victorias, tres derrotas y tres empates.

**Pista:** Revisá primero el empate, después las tres maneras de ganar y finalmente la derrota por descarte.

**Plantilla para completar**

```javascript
function compararJugadas(jugadaJugador, jugadaComputadora) {
  // Retorná Empate, Victoria o Derrota.
}

// Pedí dos jugadas válidas y mostrá la comparación.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 5. Repeticiones · Preparación · niveles 1 a 8

Poné las repeticiones dentro de funciones que hacen una tarea completa.

### Recordatorio

for sirve cuando conocés la cantidad de vueltas. do…while ejecuta al menos una vez; while comprueba antes de cada vuelta. Un contador cambia en cada iteración. return termina toda la llamada, incluso desde dentro de una repetición. ! invierte un booleano. prompt devuelve null al cancelar; revisalo antes de convertir o usar trim(), que quita espacios de los extremos. Las funciones de apoyo se entregan en las plantillas cuando hace falta.

```javascript
function mostrarIntentos(cantidadIntentos) {
  for (let numeroIntento = 1; numeroIntento <= cantidadIntentos; numeroIntento++) {
    console.log("Intento " + numeroIntento);
  }
}
mostrarIntentos(2);
```

### Ejercicio 13. Anunciar rondas

Usá un parámetro para decidir cuántas veces repetir.

**Para el juego:** Practicás el contador que identificará las rondas del historial.

1. Creá mostrarRondas(cantidadRondas).
2. Dentro, recorré del 1 a cantidadRondas con for y mostrá «Ronda [número]».
3. Probala con mostrarRondas(3) y luego con mostrarRondas(0). No necesita retornar un dato.

**Casos de prueba**

Con 3 → Ronda 1, Ronda 2 y Ronda 3, una por línea.
Con 0 → no muestra rondas.

**Pista:** El contador empieza en 1. La condición usa <= cantidadRondas.

**Plantilla para completar**

```javascript
function mostrarRondas(cantidadRondas) {
  // Mostrá las rondas con un for.
}

mostrarRondas(3);

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 14. Pedir hasta validar

Mejorá pedirJugadaSimple usando el validador ya construido.

**Para el juego:** Esta versión de pedirJugada ya está lista para el juego final.

1. La plantilla trae validarJugada. Completá pedirJugada(), sin parámetros.
2. Dentro de un do…while, pedí una jugada. Si se cancela, retorná null inmediatamente.
3. Convertí el dato; si es inválido, avisá y repetí.
4. Retorná el número válido. En el programa principal mostrá la jugada o «Juego cancelado».

**Casos de prueba**

Entradas: 2.5 / 2abc / vacío / 2 → tres avisos y Jugada elegida: 2.
Cancelar → Juego cancelado, sin nuevas preguntas.

**Pista:** No dupliques la condición numérica: llamá a validarJugada. Repetí mientras !validarJugada(numeroJugada).

**Plantilla para completar**

```javascript
function validarJugada(numeroJugada) {
  return Number.isInteger(numeroJugada) &&
    numeroJugada >= 1 && numeroJugada <= 3;
}

function pedirJugada() {
  // Pedí hasta obtener una jugada válida o una cancelación.
}

const jugadaJugador = pedirJugada();
// Mostrá el retorno; distinguí null de una jugada.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 15. Pedir un nombre usable

Aplicá la misma estructura a la bienvenida.

**Para el juego:** La bienvenida podrá recibir un nombre limpio y permitir abandonar el inicio.

1. Creá pedirNombre(), sin parámetros.
2. Pedí un nombre con do…while. Si se cancela, retorná null.
3. Quitá espacios con trim(); repetí mientras tenga menos de tres caracteres. Avisá cuando sea corto.
4. Retorná el nombre limpio y mostralo fuera de la función. Para esta práctica solo validamos longitud: no exigimos letras exclusivamente.

**Casos de prueba**

Entradas: espacios / Al / Ana → dos avisos y Jugador: Ana.
Entrada: «  Sol  » → Jugador: Sol.
Cancelar → Inicio cancelado.

**Pista:** Comprobá null antes de llamar a trim(). La propiedad length también sirve para contar caracteres de texto.

**Plantilla para completar**

```javascript
function pedirNombre() {
  // Pedí, limpiá, comprobá la longitud y retorná.
}

const nombreJugador = pedirNombre();
// Mostrá el nombre o un mensaje de cancelación.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 6. Arreglos · Preparación · niveles 1 a 8

Pasá colecciones a funciones para nombrar jugadas y guardar resultados.

### Recordatorio

Un arreglo reúne varios datos. Los índices empiezan en 0; length indica la cantidad; push agrega al final. Un arreglo declarado con const puede cambiar su contenido. Una función puede recibir un arreglo, leerlo y, si esa es su tarea, modificarlo. Todas las jugadas numéricas de esta etapa se suponen válidas. Los ejemplos son independientes: no heredan variables del ejercicio anterior.

```javascript
function mostrarPrimeraJugada(jugadasNumericas) {
  console.log(jugadasNumericas[0]);
}
mostrarPrimeraJugada([1, 3, 2]);
```

### Ejercicio 16. Nombres en un arreglo

Reescribí obtenerNombreJugada conservando su parámetro y retorno.

**Para el juego:** Simplificás una pieza existente usando la nueva estructura.

1. Creá obtenerNombreJugada(numeroJugada).
2. Dentro, guardá «Piedra», «Papel» y «Tijera» en opcionesJuego.
3. Retorná el elemento ubicado en numeroJugada - 1. Suponé 1, 2 o 3.
4. Pedí una jugada válida y mostrá el retorno.

**Casos de prueba**

Entradas separadas: 1 → Piedra; 2 → Papel; 3 → Tijera.

**Pista:** La jugada 1 se corresponde con el índice 0.

**Plantilla para completar**

```javascript
function obtenerNombreJugada(numeroJugada) {
  // Creá el arreglo y retorná el elemento correspondiente.
}

// Pedí una jugada válida y mostrala por nombre.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 17. Guardar una ronda

Modificá un historial a través de una función.

**Para el juego:** Podés recordar lo que ocurrió en cada ronda.

1. Creá agregarResultado(historialRondas, resultadoRonda).
2. Dentro, agregá el resultado con push. No hace falta retornar.
3. Creá un arreglo vacío y llamá tres veces con «Victoria», «Empate» y «Derrota».
4. Mostrá el arreglo y su cantidad de rondas.

**Casos de prueba**

Sin entradas → ["Victoria", "Empate", "Derrota"] y Rondas guardadas: 3.
El arreglo debe conservar las tres entradas en ese orden.

**Pista:** La función recibe el arreglo que querés modificar; no crees uno nuevo dentro.

**Plantilla para completar**

```javascript
function agregarResultado(historialRondas, resultadoRonda) {
  // Agregá un elemento al historial recibido.
}

const historialRondas = [];
// Llamá tres veces y mostrá el historial.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 18. Contar victorias

Recorré el historial dentro de una función y devolvé una cantidad.

**Para el juego:** Convertís el historial en información útil para el resumen.

1. Creá contarVictorias(resultadosRondas).
2. Dentro, iniciá cantidadVictorias en 0 y recorré el arreglo con for.
3. Sumá 1 solo cuando el resultado sea «Victoria».
4. Retorná la cantidad al terminar. Probá con ["Victoria", "Empate", "Derrota", "Victoria"] y con [].

**Casos de prueba**

Historial de ejemplo → Victorias: 2.
Arreglo vacío → Victorias: 0.

**Pista:** El contador se declara antes del for; return va después de terminar el recorrido.

**Plantilla para completar**

```javascript
function contarVictorias(resultadosRondas) {
  // Recorré, contá y retorná.
}

const historialRondas = ["Victoria", "Empate", "Derrota", "Victoria"];
console.log("Victorias: " + contarVictorias(historialRondas));

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 7. Métodos de arreglos · Preparación · niveles 1 a 8

Usá funciones dentro de funciones para recorrer, filtrar y transformar.

### Recordatorio

El método recibe otra función, llamada callback, y la invoca por cada elemento. forEach sirve para acciones y no devuelve un arreglo. filter crea un arreglo con los elementos cuyo callback retorna true. map crea un arreglo con un resultado por elemento. Distinguí el return del callback y el de la función que lo contiene. Usamos function antes de introducir la sintaxis flecha.

```javascript
function obtenerDerrotas(resultadosRondas) {
  return resultadosRondas.filter(function(resultadoRonda) {
    return resultadoRonda === "Derrota";
  });
}
console.log(obtenerDerrotas(["Victoria", "Derrota"]));
```

### Ejercicio 19. Mostrar el historial

Pasá de un recorrido con índice a forEach.

**Para el juego:** Esta función mostrará el historial al terminar el encuentro.

1. Creá mostrarHistorial(resultadosRondas).
2. Dentro, usá forEach con los parámetros resultadoRonda e indiceRonda.
3. Mostrá «Ronda [número]: [resultado]». El número visible comienza en 1.
4. Probala con ["Victoria", "Empate", "Derrota"]. No necesita retornar.

**Casos de prueba**

Ronda 1: Victoria
Ronda 2: Empate
Ronda 3: Derrota
Con [] no se muestra ninguna ronda.

**Pista:** forEach puede entregar el elemento y su índice. Sumá 1 al índice para mostrarlo.

**Plantilla para completar**

```javascript
function mostrarHistorial(resultadosRondas) {
  // Mostrá cada resultado con forEach.
}

mostrarHistorial(["Victoria", "Empate", "Derrota"]);

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 20. Seleccionar victorias

Obtené un nuevo arreglo en lugar de incrementar un contador manualmente.

**Para el juego:** El resumen podrá seleccionar resultados sin perder el historial completo.

1. Creá obtenerVictorias(resultadosRondas).
2. Dentro, usá filter para conservar únicamente «Victoria».
3. Retorná el arreglo filtrado. En el programa principal mostrale al usuario cuántas victorias tiene usando length.
4. Mostrá también el arreglo original para comprobar que no cambió.

**Casos de prueba**

Con ["Victoria", "Empate", "Derrota", "Victoria"] → ["Victoria", "Victoria"], cantidad 2.
Con ["Empate", "Derrota"] o [] → [], cantidad 0.

**Pista:** El callback retorna una condición; la función exterior retorna el arreglo que produce filter.

**Plantilla para completar**

```javascript
function obtenerVictorias(resultadosRondas) {
  // Retorná el resultado de filter.
}

const historialRondas = ["Victoria", "Empate", "Derrota", "Victoria"];
// Llamá, mostrá el filtrado y su cantidad; después mostrá el original.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 21. Traducir el historial

Combiná map con una función ya conocida.

**Para el juego:** El historial de números se podrá presentar como nombres.

1. La plantilla trae obtenerNombreJugada. Creá traducirJugadas(jugadasNumericas).
2. Usá map y llamá a obtenerNombreJugada para cada elemento.
3. Retorná el nuevo arreglo.
4. Probá con [1, 3, 2] y con []; las jugadas recibidas se suponen válidas.

**Casos de prueba**

[1, 3, 2] → ["Piedra", "Tijera", "Papel"]
[] → []
El arreglo numérico no cambia.

**Pista:** No repitas la traducción: el callback de map debe retornar obtenerNombreJugada(numeroJugada).

**Plantilla para completar**

```javascript
function obtenerNombreJugada(numeroJugada) {
  const opcionesJuego = ["Piedra", "Papel", "Tijera"];
  return opcionesJuego[numeroJugada - 1];
}

function traducirJugadas(jugadasNumericas) {
  // Retorná el resultado de map.
}

const jugadasJugador = [1, 3, 2];
console.log(traducirJugadas(jugadasJugador));

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 8. Objetos literales · Preparación · niveles 1 a 8

Tres ejercicios con funciones y objetos: crear una ficha, actualizar sus datos y construir un resumen.

### Recordatorio

Un objeto literal reúne propiedades. Una función puede crear un objeto, modificar uno recibido o leerlo para construir otro. En estas actividades trabajamos con fichas independientes del programa de clase.

```javascript
const fichaJugador = { nombre: "Ana", victorias: 0 }
console.log(fichaJugador.nombre)
fichaJugador.victorias = fichaJugador.victorias + 1
```

### Ejercicio 22. Crear una ficha

Construí una función que devuelva un objeto literal para guardar los datos de un jugador.

**Para el juego:** Practicás objetos y funciones usando los mensajes del juego de clase. Esta ficha es un ejercicio de preparación; no se agrega al código final del docente.

1. Definí crearFicha(nombreJugador).
2. Retorná un objeto con nombre, victorias, derrotas y empates. Las tres cantidades empiezan en 0.
3. Pedí un nombre con prompt, llamá a la función y mostrá el objeto y su propiedad nombre. En esta actividad suponemos un nombre válido.

**Casos de prueba**

Ana → {nombre: "Ana", victorias: 0, derrotas: 0, empates: 0}, y después Ana. Creá otra ficha para Luis: debe ser un objeto independiente.

**Pista:** El objeto se escribe con llaves; cada propiedad tiene nombre: valor. La función debe retornar el objeto.

**Plantilla para completar**

```javascript
function crearFicha(nombreJugador) {
  // TODO: retorná el objeto literal con sus cuatro propiedades.
}

// TODO: pedí el nombre, creá fichaJugador y mostrá ambos resultados.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 23. Registrar los tres resultados

Actualizá las propiedades de una ficha según el resultado recibido.

**Para el juego:** Practicás objetos y funciones usando los mensajes del juego de clase. Esta ficha es un ejercicio de preparación; no se agrega al código final del docente.

1. Usá crearFicha, ya incluida desde el ejercicio anterior.
2. Completá actualizarFicha(fichaJugador, resultadoPartida).
3. Si gana el jugador sumá una victoria; si gana la PC sumá una derrota; si empatan sumá un empate. Usá los textos exactos del juego.
4. Ejecutá las cuatro llamadas de prueba. Un texto desconocido no debe modificar la ficha.

**Casos de prueba**

Victoria, empate, derrota y victoria → nombre Ana, victorias 2, derrotas 1, empates 1. Una ficha nueva sigue en cero. Un resultado desconocido deja los valores iguales.

**Pista:** Modificá fichaJugador.victorias, fichaJugador.derrotas o fichaJugador.empates. No crees otra ficha dentro de actualizarFicha.

**Plantilla para completar**

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
  // TODO: actualizá la propiedad correspondiente.
}

const fichaJugador = crearFicha('Ana')
actualizarFicha(fichaJugador, 'Gana el jugador 👶🏻')
actualizarFicha(fichaJugador, 'Empate 🫱🏻🫲🏻')
actualizarFicha(fichaJugador, 'Gana la PC 🤖')
actualizarFicha(fichaJugador, 'Gana el jugador 👶🏻')
console.log(fichaJugador)
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 24. Construir un resumen

Leé una ficha y devolvé un objeto nuevo con información calculada.

**Para el juego:** Practicás objetos y funciones usando los mensajes del juego de clase. Esta ficha es un ejercicio de preparación; no se agrega al código final del docente.

1. Completá crearResumen(fichaJugador).
2. Sumá victorias, derrotas y empates en const partidasJugadas.
3. Retorná un objeto con nombre, partidasJugadas y tieneVictorias. Esta última propiedad será un booleano que indica si victorias es mayor que 0.
4. Conservá la ficha original y ejecutá las pruebas dadas.

**Casos de prueba**

Ficha nueva → {nombre: "Ana", partidasJugadas: 0, tieneVictorias: false}. Tras victoria, empate y derrota → {nombre: "Ana", partidasJugadas: 3, tieneVictorias: true}. La ficha original conserva sus cuatro propiedades.

**Pista:** tieneVictorias recibe el resultado de fichaJugador.victorias > 0. No escribas "true" como texto.

**Plantilla para completar**

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
  // TODO: calculá el total y retorná un objeto nuevo.
}

const fichaJugador = crearFicha('Ana')
console.log(crearResumen(fichaJugador))
actualizarFicha(fichaJugador, 'Gana el jugador 👶🏻')
actualizarFicha(fichaJugador, 'Empate 🫱🏻🫲🏻')
actualizarFicha(fichaJugador, 'Gana la PC 🤖')
console.log(crearResumen(fichaJugador))
console.log(fichaJugador)
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 9. Entrada y nombre · Código de clase · paso a paso

Empezamos usando validarNombre, que ya está resuelta.

### Recordatorio

prompt devuelve texto o null. alert muestra un mensaje y console.log permite observar un valor. Una función se ejecuta cuando la llamás. validarNombre devuelve true o false y avisa si el nombre no cumple sus condiciones.

```javascript
const nombre = prompt("Nombre")
console.log(validarNombre(nombre))
```

### Ejercicio 25. Pedir y mostrar

La única función que recibís hecha es validarNombre. Primero practicá la entrada y la salida.

**Para el juego:** Esta entrada será parte de iniciarJuego.

1. Dejá validarNombre tal como está.
2. Guardá un prompt en una variable let nombre.
3. Mostrá el nombre con console.log.

**Casos de prueba**

Ana → Ana en Resultados. Cancelar → null.

**Pista:** Llamá a prompt y guardá lo que devuelve.

**Plantilla para completar**

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

// TODO: Pedí el nombre y guardalo en let nombre.
// TODO: Mostrá nombre en consola.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 26. Usar el validador dado

Ahora llamá a la función que ya recibiste. No hace falta volver a escribir su lógica.

**Para el juego:** Aprendés a usar la condición que luego controlará el do...while.

1. Pedí el nombre.
2. Mostrá console.log(validarNombre(nombre)).
3. Ejecutá otra vez para probar un nombre inválido.

**Casos de prueba**

Ana → true. Al, 123, vacío o Cancelar → aviso y false.

**Pista:** Pasá nombre entre los paréntesis de validarNombre.

**Plantilla para completar**

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
// TODO: Mostrá el resultado de llamar a validarNombre con nombre.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 27. Construir los mensajes

Probá los textos exactos de bienvenida y saludo antes de agruparlos en una función.

**Para el juego:** Conservamos los mismos textos que usará iniciarJuego.

1. Mostrá la bienvenida antes de pedir el nombre.
2. Conservá la llamada al validador.
3. Mostrá el agradecimiento y el mensaje de consola con concatenación. En este paso probá con un nombre válido.

**Casos de prueba**

Ana → bienvenida, true, Gracias por jugar Ana. Mucha suerte y El jugador es: Ana.

**Pista:** Uní los textos y nombre usando +.

**Plantilla para completar**

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

// TODO: Mostrá la bienvenida exacta.
let nombre = prompt('Ingrese su nombre por favor: ')
console.log(validarNombre(nombre))
// TODO: Mostrá el agradecimiento concatenando nombre.
// TODO: Mostrá El jugador es: seguido de nombre.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 10. La función iniciarJuego · Código de clase · paso a paso

Agrupamos la bienvenida y completamos la primera función del juego.

### Recordatorio

Definir una función no la ejecuta. return devuelve un valor a quien la llamó. do ejecuta el bloque al menos una vez; while decide si vuelve a ejecutarlo. ! invierte true y false.

```javascript
do {
  nombre = prompt("Nombre")
} while (!validarNombre(nombre))
```

### Ejercicio 28. Definir y llamar

Comenzá iniciarJuego con la bienvenida. La iremos completando en los próximos dos pasos.

**Para el juego:** Empezás la función con el nombre y la firma del ejemplo de clase.

1. Definí iniciarJuego sin parámetros.
2. Escribí el alert de bienvenida dentro de la función.
3. Llamá iniciarJuego fuera de las llaves.

**Casos de prueba**

Una ejecución → una bienvenida. Si no la llamás, no aparece.

**Pista:** La llamada lleva paréntesis: iniciarJuego().

**Plantilla para completar**

```javascript
// FUNCIÓN DADA: usala sin modificarla.
function validarNombre(nombre) {
  if (nombre == null || nombre == '' || nombre.length < 3 || !isNaN(nombre)) {
    alert('El nombre ingresado debe ser un texto de al menos 3 caracteres')
    return false
  }
  return true
}

// TODO: Definí iniciarJuego con el alert de bienvenida.

iniciarJuego()
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 29. Repetir hasta validar

Agregá el pedido de nombre dentro de iniciarJuego. validarNombre sigue dada.

**Para el juego:** Es exactamente el bucle de iniciarJuego.

1. Declará let nombre antes de do.
2. Dentro de do asigná a nombre el prompt exacto.
3. Repetí con while (!validarNombre(nombre)).

**Casos de prueba**

Al → aviso y nueva pregunta; luego Ana → termina. Cancelar también vuelve a preguntar.

**Pista:** No declares otra variable dentro de do: asigná a nombre.

**Plantilla para completar**

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

// TODO: Declará nombre y escribí el do...while que usa validarNombre.

}

iniciarJuego()
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 30. Saludar y retornar

Completá iniciarJuego con el agradecimiento, la consola y el retorno en mayúsculas.

**Para el juego:** iniciarJuego ya queda completa como en el código de referencia.

1. Después del bucle, agregá los dos mensajes del ejemplo.
2. Retorná nombre.toLocaleUpperCase().
3. Guardá la llamada en const nombreJugador y ejecutá el alert del programa principal.

**Casos de prueba**

Ana → consola El jugador es: Ana; último alert Gracias por jugar :ANA.

**Pista:** return no muestra nada: el programa principal recibe su valor.

**Plantilla para completar**

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

// TODO: Agregá ambos mensajes y retorná el nombre con toLocaleUpperCase().
}

const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 11. Validar una jugada · Código de clase · paso a paso

Ahora construís validarJugada; esta función no viene resuelta al inicio.

### Recordatorio

isNaN indica si un valor se considera NaN. !isNaN invierte ese resultado. && exige que todas las condiciones se cumplan. Un return termina la función.

```javascript
!isNaN(eleccion) && eleccion > 0 && eleccion < 4
```

### Ejercicio 31. Armar la condición

Escribí la condición que después irá dentro de validarJugada.

**Para el juego:** Esta expresión será la condición del if de validarJugada.

1. Usá let eleccion = 2.
2. Mostrá la condición con !isNaN y los dos límites.
3. Cambiá eleccion para probar los otros casos.

**Casos de prueba**

2 → true; 0, 4 y NaN → false. 2.5 → true: esta condición verifica rango, no enteros.

**Pista:** Uní las tres partes con &&.

**Plantilla para completar**

```javascript
let eleccion = 2
// TODO: Mostrá la condición exacta de validación.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 32. Retornar true o false

Convertí la condición en una función. El aviso se agrega en el siguiente paso.

**Para el juego:** Construís el validador que llamará pedirJugada.

1. Definí validarJugada(eleccion).
2. Si se cumple la condición, retorná true.
3. Fuera del if, retorná false.

**Casos de prueba**

Las llamadas dadas deben mostrar true, false y false.

**Pista:** El false queda después del if, por descarte.

**Plantilla para completar**

```javascript
// TODO: Definí validarJugada con la condición exacta y los dos return.

console.log(validarJugada(2))
console.log(validarJugada(0))
console.log(validarJugada(NaN))
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 33. Avisar el error

Completá validarJugada con el mensaje exacto de entrada inválida.

**Para el juego:** validarJugada queda completa.

1. Conservá el if y el return true.
2. Antes de return false, agregá el alert del ejemplo.
3. Probá 1, 2, 3, 0, 4 y NaN.

**Casos de prueba**

1, 2 y 3 → true sin alert. 0, 4 y NaN → Ingrese un NUMERO entre 1 y 3, y false.

**Pista:** El alert va fuera del if, inmediatamente antes del return false.

**Plantilla para completar**

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
// TODO: Mostrá el mensaje exacto de error.
  return false
}

console.log(validarJugada(0))
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 12. Pedir una jugada · Código de clase · paso a paso

Usamos parseInt y el validador para completar pedirJugada.

### Recordatorio

prompt devuelve texto. parseInt obtiene la parte entera inicial; por ejemplo, parseInt("2.5") y parseInt("2abc") devuelven 2. Conservamos esa conversión del código de clase.

```javascript
eleccion = parseInt(
  prompt("Ingrese un numero para jugar: 1 piedra, 2 papel, 3 para tijera")
)
```

### Ejercicio 34. Convertir el dato

Empezá pedirJugada con una sola pregunta y su conversión. Luego agregaremos la repetición.

**Para el juego:** Conservás la entrada y conversión exactas de pedirJugada.

1. Definí pedirJugada sin parámetros.
2. Inicializá let eleccion = 0.
3. Asigná parseInt(prompt(...)) y retorná eleccion.

**Casos de prueba**

2 → número 2. hola → NaN. 2abc → 2.

**Pista:** El prompt debe quedar dentro de parseInt.

**Plantilla para completar**

```javascript
// TODO: Definí pedirJugada con eleccion, parseInt(prompt(...)) y return.

console.log(pedirJugada())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 35. Repetir con el validador

Usá validarJugada dentro de un do...while. Su resolución anterior está incluida como apoyo.

**Para el juego:** pedirJugada ya queda completa.

1. Dentro de pedirJugada, rodeá la asignación con do.
2. Cerrá con while (!validarJugada(eleccion)).
3. Dejá return eleccion después del bucle.

**Casos de prueba**

0, hola, 4 y finalmente 2 → tres avisos, cuatro preguntas y resultado 2.

**Pista:** La condición necesita ! para repetir cuando la jugada es inválida.

**Plantilla para completar**

```javascript
function validarJugada(eleccion) {
  if (!isNaN(eleccion) && eleccion > 0 && eleccion < 4) {
    return true
  }
  alert('Ingrese un NUMERO entre 1 y 3')
  return false
}

// TODO: Escribí pedirJugada completa, usando el do...while exacto.

console.log(pedirJugada())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 36. Conectar las dos entradas

Reuní las funciones que ya construiste para pedir nombre y jugada.

**Para el juego:** Ya podés ingresar los datos reales del jugador.

1. Llamá iniciarJuego y guardá su retorno en nombreJugador.
2. Mostrá el alert Gracias por jugar : seguido del nombre.
3. Probá pedirJugada con console.log. Todavía no hay rival.

**Casos de prueba**

Al, Ana, 0, 3 → corrige el nombre, corrige la jugada y termina mostrando 3.

**Pista:** Cada función se encarga de su propio pedido y validación.

**Plantilla para completar**

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

// TODO: Escribí las tres llamadas indicadas.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 13. La jugada de la PC · Código de clase · paso a paso

Construimos jugadaRandom exactamente con parseInt y Math.random.

### Recordatorio

Math.random devuelve un número desde 0 inclusive hasta 1 sin incluirlo. Multiplicar por 3 y sumar 1 lo lleva al intervalo de 1 a menos de 4. parseInt produce 1, 2 o 3.

```javascript
let numero = parseInt(Math.random() * 3 + 1)
```

### Ejercicio 37. Observar el azar

Escribí una primera versión de jugadaRandom para observar Math.random.

**Para el juego:** Comprendés de dónde sale el azar.

1. Definí jugadaRandom sin parámetros.
2. Guardá Math.random() en let numero y retornalo.
3. Ejecutá varias veces la llamada dada.

**Casos de prueba**

Podrías obtener 0.17 o 0.82. Todavía no son jugadas.

**Pista:** Esta versión es parcial: falta transformar el intervalo.

**Plantilla para completar**

```javascript
// TODO: Definí jugadaRandom para devolver Math.random().

console.log(jugadaRandom())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 38. Transformar el intervalo

Modificá jugadaRandom para multiplicar por 3 y sumar 1.

**Para el juego:** Preparás el intervalo de las tres jugadas.

1. Guardá Math.random() * 3 + 1 en numero.
2. Conservá return numero.
3. Observá varias ejecuciones.

**Casos de prueba**

Siempre debe ser >= 1 y < 4; por ejemplo, 1.51 o 3.8.

**Pista:** Primero se multiplica por 3; después se suma 1.

**Plantilla para completar**

```javascript
function jugadaRandom() {
// TODO: Asigná el número aleatorio multiplicado por 3, más 1.
  return numero
}

console.log(jugadaRandom())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 39. Retornar 1, 2 o 3

Terminá jugadaRandom con parseInt, tal como aparece en la solución de clase.

**Para el juego:** jugadaRandom queda completa.

1. Aplicá parseInt a toda la expresión Math.random() * 3 + 1.
2. Conservá let numero y return numero.
3. Ejecutá varias veces.

**Casos de prueba**

Solo 1, 2 o 3. Pueden repetirse; no tienen que aparecer todos en pocas pruebas.

**Pista:** No cambies el nombre de la función ni la forma de convertir.

**Plantilla para completar**

```javascript
function jugadaRandom() {
// TODO: Asigná la expresión completa usando parseInt.
  return numero
}

console.log(jugadaRandom())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 14. Preparar la comparación · Código de clase · paso a paso

Empezamos compararJugadas sin parámetros: ella obtiene ambas jugadas.

### Recordatorio

Un arreglo guarda valores por posición, empezando en 0. compararJugadas llamará a pedirJugada y jugadaRandom. Su return será uno de los tres textos exactos del arreglo.

```javascript
const resultadosPosibles = ['Gana el jugador 👶🏻', 'Empate 🫱🏻🫲🏻', 'Gana la PC 🤖']
```

### Ejercicio 40. Guardar los resultados

Primero construí el arreglo dentro de compararJugadas. Usamos un retorno temporal para conocer sus posiciones.

**Para el juego:** Este arreglo es el mismo que tendrá compararJugadas al terminar.

1. Definí compararJugadas sin parámetros.
2. Creá resultadosPosibles con los tres mensajes en el orden indicado.
3. Retorná la posición 1 y probá la llamada. Después probá temporalmente 0 y 2.

**Casos de prueba**

Posición 0 → Gana el jugador 👶🏻; 1 → Empate 🫱🏻🫲🏻; 2 → Gana la PC 🤖.

**Pista:** Las posiciones comienzan en cero. Copiá también los emojis.

**Plantilla para completar**

```javascript
function compararJugadas() {
// TODO: Creá resultadosPosibles con los tres textos exactos.
  return resultadosPosibles[1]
}

console.log(compararJugadas())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 41. Obtener ambas jugadas

Agregá las llamadas dentro de compararJugadas. Las funciones anteriores vienen incluidas.

**Para el juego:** Respetás la organización del ejemplo: obtener y comparar dentro de la misma función.

1. Guardá pedirJugada() en eleccionJugador.
2. Guardá jugadaRandom() en eleccionComputadora.
3. Mostrá Jugada de la PC: seguido de su elección. Por ahora no retornes un resultado.

**Casos de prueba**

Ingresá 1: aparece Jugada de la PC: con 1, 2 o 3. Todavía no se anuncia ganador.

**Pista:** Las llamadas no reciben argumentos.

**Plantilla para completar**

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
// TODO: Obtené ambas jugadas y mostrá la de la PC.

}

compararJugadas()
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 42. Resolver el empate

Agregá la primera alternativa. Todavía faltan la victoria y la derrota.

**Para el juego:** Ya está resuelta la primera salida de compararJugadas.

1. Compará eleccionJugador == eleccionComputadora.
2. Si son iguales, retorná resultadosPosibles[1].
3. Para probar el empate, cambiá temporalmente el retorno de jugadaRandom a 2 e ingresá 2. Luego restauralo.

**Casos de prueba**

Ambos 2 → Empate 🫱🏻🫲🏻. Si son distintos, esta versión parcial devuelve undefined.

**Pista:** Usá ==, tal como en el código de referencia.

**Plantilla para completar**

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

// TODO: Agregá el if del empate.
}

console.log(compararJugadas())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 15. Completar la partida · Código de clase · paso a paso

Agregamos las victorias, la derrota por descarte y el programa principal exacto.

### Recordatorio

&& conecta las dos elecciones de una combinación ganadora. || permite cualquiera de las tres combinaciones. Después del empate y de la victoria, solo queda la derrota.

```javascript
(eleccionJugador == 1 && eleccionComputadora == 3) ||
(eleccionJugador == 2 && eleccionComputadora == 1) ||
(eleccionJugador == 3 && eleccionComputadora == 2)
```

### Ejercicio 43. Reconocer las victorias

Completá el else if después del empate con las tres combinaciones ganadoras.

**Para el juego:** Completás las reglas de victoria sin crear otra función.

1. Piedra gana a tijera: jugador 1 y PC 3.
2. Papel gana a piedra: jugador 2 y PC 1.
3. Tijera gana a papel: jugador 3 y PC 2. Uní los casos con || y retorná la posición 0.

**Casos de prueba**

Fijá temporalmente la PC en 3: jugador 1 → Gana el jugador 👶🏻; jugador 3 → empate. La derrota aún devuelve undefined.

**Pista:** Mantené los paréntesis de cada pareja y los operadores ==, && y ||.

**Plantilla para completar**

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
    // TODO: Escribí aquí las tres combinaciones ganadoras unidas por ||.
    false
  ) {
    return resultadosPosibles[0]
  }
}

console.log(compararJugadas())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 44. Derrota por descarte

Terminá compararJugadas con su último return.

**Para el juego:** La función retorna exactamente los tres mensajes del ejemplo.

1. Conservá el empate y el else if de victoria.
2. Después de ambos bloques, retorná resultadosPosibles[2].
3. Probá las nueve combinaciones fijando temporalmente la PC en 1, 2 y 3; restaurá jugadaRandom al finalizar.

**Casos de prueba**

Jugador/PC: 1/1 empate, 1/2 PC, 1/3 jugador; 2/1 jugador, 2/2 empate, 2/3 PC; 3/1 PC, 3/2 jugador, 3/3 empate.

**Pista:** El último return queda fuera del else if.

**Plantilla para completar**

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
// TODO: Retorná la derrota por descarte.
}

console.log(compararJugadas())
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 45. El programa de clase

Conectá las seis funciones mediante las tres líneas exactas del programa principal.

**Para el juego:** Ya construiste toda la solución de referencia partiendo solo de validarNombre dada.

1. Guardá iniciarJuego() en const nombreJugador.
2. Ejecutá alert con Gracias por jugar : y nombreJugador.
3. Ejecutá console.log(compararJugadas()). Compará esta versión con el código de referencia.

**Casos de prueba**

Ana y una jugada válida → bienvenida, agradecimientos, nombre en consola, jugada de la PC y resultado en consola.

**Pista:** No le pases argumentos a compararJugadas ni llames pedirJugada por separado.

**Plantilla para completar**

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

// TODO: Escribí las tres líneas exactas del programa principal.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 16. Mesa de trabajo · Código de clase · paso a paso

El desafío final: una función recibe el resultado, lo muestra y alienta si hubo derrota.

### Recordatorio

Un parámetro recibe un valor de la llamada. La función mostrarResultado puede usar el texto retornado por compararJugadas. Comparar una vez evita iniciar dos partidas.

```javascript
mostrarResultado('Gana la PC 🤖')
```

### Ejercicio 46. Mostrar el resultado

Resolvé los tres primeros puntos de la mesa: recibir texto, mostrarlo en consola y en una alerta.

**Para el juego:** Resolvés los puntos 1, 2 y 3 de la consigna.

1. Creá mostrarResultado(resultadoPartida).
2. Dentro, ejecutá console.log(resultadoPartida).
3. Después ejecutá alert(resultadoPartida). Probá con las tres llamadas dadas.

**Casos de prueba**

Cada uno de los tres textos aparece dos veces: una salida de consola y una alerta.

**Pista:** El nombre resultadoPartida representa el texto recibido. No lo reemplaces por un resultado fijo.

**Plantilla para completar**

```javascript
// TODO: Definí mostrarResultado con un parámetro y las dos salidas.

mostrarResultado('Gana el jugador 👶🏻')
mostrarResultado('Empate 🫱🏻🫲🏻')
mostrarResultado('Gana la PC 🤖')
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 47. Alentar al perder

Agregá el cuarto punto: mostrar otro mensaje únicamente si el resultado es una derrota.

**Para el juego:** La nueva función ya cumple toda la consigna.

1. Conservá las dos salidas anteriores.
2. Compará resultadoPartida == 'Gana la PC 🤖'.
3. Dentro del if, mostrá un alert de aliento y suerte para la próxima oportunidad.

**Casos de prueba**

Victoria y empate → dos salidas cada uno. Derrota → esas dos salidas y una tercera alerta de aliento.

**Pista:** La derrota se reconoce por el texto completo, incluido el emoji.

**Plantilla para completar**

```javascript
function mostrarResultado(resultadoPartida) {
  console.log(resultadoPartida)
  alert(resultadoPartida)
// TODO: Agregá el if que muestra aliento únicamente al perder.
}

mostrarResultado('Gana el jugador 👶🏻')
mostrarResultado('Empate 🫱🏻🫲🏻')
mostrarResultado('Gana la PC 🤖')
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 48. Usarla en el juego

Integrá la función de la mesa con el juego que ya construiste.

**Para el juego:** Terminaste la mesa de trabajo integrada al juego.

1. Conservá las seis funciones de referencia.
2. Agregá mostrarResultado con la resolución anterior.
3. Reemplazá únicamente console.log(compararJugadas()) por mostrarResultado(compararJugadas()).

**Casos de prueba**

La partida pide nombre y una jugada válida; muestra el resultado en consola y alerta. Si gana la PC, agrega el aliento. No debe pedir una segunda jugada válida.

**Pista:** compararJugadas() se ejecuta una vez y su retorno se pasa a mostrarResultado.

**Plantilla para completar**

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

// TODO: Escribí mostrarResultado como en el ejercicio anterior.

const nombreJugador = iniciarJuego()
alert('Gracias por jugar :' + nombreJugador)
// TODO: Conectá el resultado de una sola comparación con mostrarResultado.
```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Identificá también qué recibe, qué hace y qué devuelve cada función.

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

