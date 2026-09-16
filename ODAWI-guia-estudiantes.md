# ODAWI · Volver a programar

Práctica de recuperación antes de DOM · 8 etapas · 24 ejercicios

## Cómo trabajar

1. Leé el recordatorio de la etapa.
2. Anticipá qué entradas necesitás y qué resultado esperás.
3. Escribí tu solución en el laboratorio o en un archivo JavaScript conectado a un HTML.
4. Ejecutá con los casos propuestos.
5. Recién después, compará con la resolución y explicá cada variable.

Una o dos etapas por encuentro es una referencia, no una carrera. Volvé a resolver los ejercicios cambiando los datos. El recorrido es entrada y salida → datos → funciones → alternativas → repeticiones → arreglos → métodos → objetos. Desde la etapa 3, todos los ejercicios usan funciones. Las primeras actividades suponen entradas válidas; en la etapa 4 construís el validador y en la 5 lo usás para repetir preguntas y manejar Cancelar. Cada ejercicio es independiente: las funciones de apoyo que necesitás ya están incluidas en su plantilla.

El laboratorio acepta JavaScript sin DOM. prompt abre una ventana de entrada dentro de la página; alert y console.log se muestran en el panel Resultados. Los borradores se conservan mientras la página esté abierta. El laboratorio está pensado para estos programas secuenciales; no para DOM, temporizadores, red ni programas asincrónicos. Las repeticiones demasiado largas se detienen para que puedas corregirlas.

## Ayudas del editor

El editor usa colores tipo One Dark: textos en verde, palabras clave en violeta, números en naranja y comentarios en gris. Los nombres y propiedades también se diferencian con color.

Las sugerencias aparecen mientras escribís. También podés abrirlas con Ctrl + Espacio o con el botón Sugerencias. Elegí con las flechas, aceptá con Enter o Tab y cerrá con Esc. Ctrl + Enter ejecuta el programa. El editor cierra automáticamente comillas, paréntesis, corchetes y llaves. Las sugerencias completan nombres; no verifican si la solución es correcta.

## Etapa 1. Entrada y salida

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 2. Datos y operaciones

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 3. Funciones

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 4. Alternativas

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 5. Repeticiones

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 6. Arreglos

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 7. Métodos de arreglos

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

## Etapa 8. Objetos literales

Reuní nombre y victorias en una ficha y conectá las piezas del juego.

### Recordatorio

Un objeto describe una entidad mediante propiedades: { nombre: "Ana", victorias: 0 }. Se leen y modifican con punto. Una función puede crear y retornar un objeto; otra puede recibirlo y actualizarlo. const permite modificar propiedades. En el integrador, jugarEncuentro coordina las funciones: el while repite mientras ninguno haya llegado a dos victorias.

```javascript
function mostrarMarcador(jugador) {
  console.log(jugador.nombre + ": " + jugador.victorias);
}
mostrarMarcador({ nombre: "Ana", victorias: 1 });
```

### Ejercicio 22. Crear un jugador

Usá una función para construir fichas con la misma forma.

**Para el juego:** Las fichas guardarán el marcador del encuentro.

1. Creá crearJugador(nombreJugador).
2. Retorná un objeto con nombre igual al parámetro y victorias igual a 0.
3. Pedí un nombre válido y creá la ficha del jugador.
4. Llamá otra vez con «Computadora». Mostrá ambas fichas.

**Casos de prueba**

Entrada: Ana → {nombre: "Ana", victorias: 0} y {nombre: "Computadora", victorias: 0}.

**Pista:** El objeto se crea dentro de la función y se entrega con return.

**Plantilla para completar**

```javascript
function crearJugador(nombreJugador) {
  // Retorná la ficha.
}

// Creá y mostrá el jugador y la computadora.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 23. Actualizar el marcador

Hacé que una función actualice las fichas según el resultado.

**Para el juego:** Ya podés actualizar el marcador después de comparar dos jugadas.

1. La plantilla trae crearJugador. Completá registrarResultado(jugador, computadora, resultadoRonda).
2. Si el resultado es «Victoria», sumá 1 a jugador.victorias; si es «Derrota», sumá 1 a computadora.victorias.
3. Con «Empate» no cambies ninguna ficha. No hace falta retornar: la función actualiza los objetos recibidos.
4. Llamá con Victoria, Empate y Derrota, en ese orden, y mostrá el marcador.

**Casos de prueba**

Después de Victoria → 1 a 0.
Después de Empate → 1 a 0.
Después de Derrota → 1 a 1.

**Pista:** Usá las propiedades de los parámetros. No construyas nuevos jugadores dentro de registrarResultado.

**Plantilla para completar**

```javascript
function crearJugador(nombreJugador) {
  return {
    nombre: nombreJugador,
    victorias: 0
  };
}

function registrarResultado(jugador, computadora, resultadoRonda) {
  // Actualizá solo la ficha que corresponda.
}

const jugador = crearJugador("Ana");
const computadora = crearJugador("Computadora");
// Probá los tres resultados y mostrá las victorias.

```

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

### Ejercicio 24. Conectar el juego

Integrador guiado: las funciones anteriores ya están en la plantilla. Completá jugarEncuentro().

**Para el juego:** Terminás con piedra, papel o tijera funcional, con validación, marcador e historial, sin DOM.

1. Pedí el nombre con pedirNombre; si retorna null, terminá la función. Mostrá el saludo y creá jugador y computadora con crearJugador.
2. Creá historialRondas y jugadasJugador como arreglos vacíos.
3. Usá while para repetir mientras ambos tengan menos de dos victorias. Pedí la jugada; si se cancela, mostrá el marcador parcial y el historial, y terminá sin anunciar ganador.
4. Generá la jugada rival, compará y actualizá el marcador. Guardá resultado y jugada en los arreglos; mostrá los nombres de ambas elecciones y el resultado.
5. Al salir normalmente, anunciá quién llegó a dos victorias. Mostrá el marcador, el historial, las jugadas traducidas y la cantidad de victorias usando las funciones ya construidas.

**Casos de prueba**

Para una prueba predecible, cambiá temporalmente el cuerpo de generarJugadaComputadora por return 3.
Nombre Ana; jugadas 3 / 1 / 1 → Empate, Victoria, Victoria; gana Ana, 2 a 0.
Con la misma computadora fija, 2 / 2 → dos derrotas; gana la computadora, 0 a 2.
Cancelar el nombre → Inicio cancelado. Cancelar una jugada → marcador parcial, sin ganador.
Después restaurá la función aleatoria.

**Pista:** Completá solo la función del principio. Cada ayuda ya tiene una tarea: pedir, generar, comparar, registrar o mostrar. La condición del while usa && porque queremos seguir solo si ninguno llegó a dos.

**Plantilla para completar**

```javascript
// COMPLETÁ ESTA FUNCIÓN. Las piezas de apoyo están debajo.
function jugarEncuentro() {
  // 1. Pedí el nombre y manejá Cancelar.
  // 2. Creá las fichas y los dos historiales.
  // 3. Repetí rondas hasta que alguien obtenga dos victorias.
  // 4. Mostrá el ganador y el resumen.
}

// FUNCIONES DE APOYO: ya practicadas.
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

**Antes de avanzar:** explicá qué guarda cada variable y qué cambia si usás otra entrada. Desde la etapa 3, identificá también qué recibe, qué hace y qué devuelve cada función.

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

