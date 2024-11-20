// CURSO DE JAVASCRIPT

//7 tipos primitivos de datos:

//Number: incluye números enteros y decimales.

const number = 24;
console.log(number);

//String: una cadena de texto.

const myString = "Hola, soy un string o cadena de texto";// podemos encerrarlos entre comillas dobles, simples e inversas (estas últimas 
//encerrando a su vez a las variables así: ${}) 
console.log(myString);

//Boolean: puede ser true o false.

const boolean1 = true;
const boolean2 = false;
console.log(boolean1);
console.log(boolean2);

//Null: representa la ausencia de un valor. Existe en el código.

let myNull = null;
console.log(myNull);//Lo toma como objeto, es un error de JS

//Undefined: se utiliza cuando una variable no tiene un valor asignado. No existe en ningún lado.

let myUndifined;
console.log(myUndifined);

//Symbol: es un tipo único y no mutable de datos.

let symbolNumberOne = Symbol(2);//Es como el ID en CSS tiene un valor único.
let symbolNumberTwo = Symbol(2);
console.log(symbolNumberOne);
console.log(symbolNumberTwo);

console.log(symbolNumberOne === symbolNumberTwo);
console.log(symbolNumberOne !== symbolNumberTwo);


//Ejemplo:

let validEmail = Symbol("valid email")

function validarEmail(usuario) {
	if (!usuario[validEmail]) {
		if (usuario.email.endsWith("gmail.com")) {
			usuario[validEmail] = true;
		}
	}			
}	

//BigInt: es un número entero de tamaño arbitrario.

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");

console.log(hugeOctal);
console.log(hugeHex);

// Puedes almacenar cualquiera de estos tipos primitivos en una variable o una constante.

// VAR (NO!) LET (SI) Y CONST (SOLO SI SABEMOS QUE SU VALOR NO VA A CAMBIAR)

// VAR: ya no se utiliza, ya que no va por bloque

const objeto = {
	nombre: "Santiago",
	edad: 22
};

const colores = ["blanco","celeste","verde"];

console.log(objeto);
console.log(colores);


objeto.email = "santiago.ceruso@gmail.com";
colores.push("azul");

console.log(objeto);
console.log(colores);

//STRING:

let nombre = "Santiago";
let apellido = "Ceruso";
let message = new String ("Hola Mundo");
let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(nombre,apellido,message);
console.log(nombre.length,apellido.length,nombre.toUpperCase(),apellido.toLowerCase(),lorem.includes("laboris"),lorem.includes("gol"),lorem.trim(),lorem.split(""),lorem.split(","));

//Concatenación

let nombre1 = "Lucas";
let apellido1 = "Hernandez";
let frase = "Hola, mi nombre es" + nombre1 + "" + apellido1 + ".";

console.log(frase);

//Pero hay una mehjor manera: Template Strings

let frase1 = `Hola, mi nombre es ${nombre1} ${apellido1}.`

console.log(frase1);

//Este tipo de comillas también funciona si utilizamos distintos renglones. Por ejemplo:

let cancion = `tu tu tu
tu tu tutuut tu
tu tuutu tu`;

console.log(cancion);

//Con concatenación, esto resulta más complicado, pero se puede hacer:

let cancion1 = "turu";
cancion1 += "turupu";
cancion1 += "tururu";
cancion1 += "turutu";

console.log(cancion1);

//Numbers:


let a = 2;
let b = new Number(1);
let c = 7.95;
let d = "8.34";


console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(a + b);
console.log(c + d);
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));

//Booleans

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero);
console.log(falso);
console.log(v);
console.log(f);

//Valores que tienden a verdadero o falso

console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));

//Undefined: indica que no se ha inicializado una variable y que el valor está ausente.

let indefinida;
console.log(indefinida);

//Null: Es un valor especial que indica la ausencia de valor.

let nulo = null;
console.log(nulo);

//Not a Number (NaN): CUANDO NO ES UN NÚMERO

let noEsUnNumero = "NO SOY UN NÚMERO";
console.log(noEsUnNumero*37);

//FUNCIONES: Declaradas y Reservadas

function funcionNormal() {

	console.log("Esta es una función normal");
	console.log(1);
	console.log(2);
	console.log(3);
	console.log(4);
}

funcionNormal();//No utilizamos "console.log()" ya que lo utilizamos dentro de la función y podría causar problemas con funciones más complejas.


function funcionQueDevuelveValor() {

	console.log("Esta función devuelve valores. Utilizamos la palabra RETURN");
	return 19;
	console.log("Este console.log no va a tomarlo, ya que hay un RETURN previo");//NO LA VA A TOMAR YA QUE LA FUNCIÓN YA DEVOLVIÓ UN VALOR

}

funcionQueDevuelveValor();

let llamarFuncionCompleta = funcionQueDevuelveValor();

console.log(llamarFuncionCompleta);


// Hoisting


funcionPreviaAlaFuncion();

function funcionPreviaAlaFuncion(nombre,tamaño){

	console.log(`Hola, soy ${nombre} y la tengo re ${tamaño}.`);

}

funcionPreviaAlaFuncion("Santiago","grande");


//Funcion Anónima

let funcionAnonima = function(){

	console.log("Esta función es expresada y anónima. Esto es porque desde la variable ya le dimos un nombre y la función queda anónima.")
} 

funcionAnonima();


//Funciones y FOR O WHILE

function funcionConFor(){

	for (var i = 1; i <= 11; i++) {
		
	console.log("Me gusta la guita")

	}

}

funcionConFor();


//Arrays/Arreglos

/*

Los arrays son objetos similares a una lista cuyo prototipo proporciona 
métodos para efectuar operaciones de recorrido y de mutación. 
Tanto la longitud como el tipo de los elementos de un array son variables. 
Dado que la longitud de un array puede cambiar en cualquier momento, 
y los datos se pueden almacenar en ubicaciones no contiguas, 
no hay garantía de que los arrays de JavaScript sean densos; 
esto depende de cómo el programador elija usarlos. 
En general estas características son cómodas, pero si, 
en su caso particular, no resultan deseables, 
puede considerar el uso de arrays con tipo.

*/


let a = [0, 1 , 2 , 4] //Arraca desde 0 en adelante el conteo


let b = ["let it be", 7 , true , [1, 2, 3 , ["E","I","O"]]];

console.log(a);
console.log(a[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3][1]);
console.log(b.push[]);//Cómo hacer para agregar un valor a un array si está uno dentro de otro. 
console.log(b[3][1][2]);

//.fill: multiplica un valor por la cantidad de veces que le digamos

let b = Array(100).fill(false);

console.log(b);

//.of

let a = Array.of(1, 2, 3, 1);
console.log(a);


//.push

let colores = ["rojo","azul","amarillo"];

colores.push("naranja");

console.log(colores);

colores.pop();

console.log(colores);//Para quitar el último elemento


//FOR EACH: Utilizando el método ".forEach" podemos crear funciones y utilizar cada una de las variables.

colores.forEach(function (li)){
	console.log(`Ella tiene un vestido ${li}.`)
} 

//OBJETOS

const yo = {

  nombre: "Santiago",
  apellido: "Ceruso",
  edad: 22,
  nacionalidad: "argentino",
  estudio: "programación",
  pasatiempos: ["correr", "leer", "jugar fútbol"],
  redes: ["santic@gmail.com", "sceru02", "santi:)"],

  introduccionMia: function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años. Soy ${this.nacionalidad} y estudio ${this.estudio}.`);
  }
};

console.log(yo);

yo.introduccionMia();

//OBJECT KEYS

console.log(Object.keys(yo));

// OBJECT VALUES

console.log(Object.values(yo));

//CLASE 13: TIPO DE OPERADORES  


//Operador Módulo

let f = 5 + (4*7) - 9;
let modulo1 = 5 / 2; //Ese símbolo "/" nos va a dar el resultado cuando lo carguemos en el sistema (COCIENTE)
let modulo2 = 5 % 2; //En cambio este símbolo "%", nos va a indicar el (RECIBO) 

console.log(f);
console.log(modulo1);
console.log(modulo2);

// Relacionales

// < ; > ; <= ; >= ; = ; == ; === ; != ; !==  

console.log(8 > 4);
console.log(8 > 4);
console.log(8 >= 4);
console.log(8 <= 4);

/*

= es asignación de variable
== es comparación de valores
=== compara tipo de dato y de valor

*/

console.log(5 == 5);
console.log("5" == 5);
console.log(1 == true);

console.log(5 === 5);
console.log("5" === 5);
console.log(1 === true);

// CLASE 15: LOOPS

//FOR CONST IN 

const santi = {

nombre: "Santiago",
apellido: "Cerluso",
edad: 22,

}


for (const prop in santi){

console.log(`Key: ${prop}, Value: ${santi.prop}.`);

}


// FOR CONST OF

const numbers = [ 10 , 20 , 30 , 40 , 50 , 60 , 70];

for (const elements of numbers){
	console.log(elements);
}


// MANEJO DE ERRORES

try{
console.log("En el try se agrega el código a evaluar");	
noExiste;
console.log("Otro mensaje");
} catch(error){
console.log("Catch, captura cualquier error en el Try");
console.log(error);	
} finally {
console.log("se ejecuta SIEMPRE al final de un Try.Casi no se usa");
}

//EJEMPLO

try{

let edad = 23; 

} catch(edad === 22){

console.log("Programas como el orto");

} finally (edad++) {

console.log(edad);

}


//BREAK: CORTA EL CICLO

const arrays1 = [0,2,3,4,7,6,8,9,5];

for (let i = 0; i < arrays1.length; i++) {

  if (i === 4){

    break;

  }

  console.log(arrays1[i]);
}

//CONTINUE: SALTEA UN ARRAY

for (let i = 0; i < arrays1.length; i++) {

  if (i === 4){

    continue;

  }

  console.log(arrays1[i]);
}


//CLASE 18: CON DESTRUCTURACIÓN


// CON ARRAYS:

const numeros = [1,2,3];
console.log(numeros);


const [one, two, three] = numeros;
console.log(one,two,three);

// CON OBJETCTS:

const yo = {

name: "Jose",
surname: "Hernandez",
age: 28,

}


const {name, surname, age} = yo;
console.log(name, surname, age);

//IPORTANTE SIEMPRE RESPETAR LOS NOMBRES QUE COMPONEN AL OBJETO, YA QUE SINO, NO LO VA A TOMAR;

//CLASE 20: OBJETOS LITERALES

// NUEVOS MÉTODOS PARA EL USO DE ATRIBUTOS Y MÉTODOS

let nombre = "Jose", apellido = "Hernandez", edad = 28;

const yo = {

nombre: nombre,
apellido: apellido,
edad: edad,
funcion: function () {
  console.log("Me mudo a vivivr solapa");
}  
}

console.log(yo);
yo.funcion();

const me = {

nombre, 
apellido, 
edad,
estado: "boludo",
funcion() {
  console.log("Me mudo a vivivr solapaaa");
}  
}

console.log(yo);
me.funcion();

//PARÁMETROS REST:

//En este caso "...c" es un spread operator.

function operar(a, b, ...c) {

  let result = a - b; 

  c.forEach(function(n){
    result += n
  })

  return result
  
 } 

console.log(operar(4,2));
console.log(operar(4,2,5));
console.log(operar(4,2,5,6));
console.log(operar(4,2,5,7,1));
console.log(operar(4,2,5,7,1,7));
console.log(operar(4,2,5,7,1,8,1));

const arr1 = [3,8,9,0,4],
	  arr2 = [4,2,5,1,6];

console.log(arr1,arr2);	  

const arr3 = [...arr1,...arr2];
console.log(arr3)

//ARROW FUNCTIONS

const sumar = (a,b) => a + b ;

console.log(sumar(1,2));
console.log(sumar(1,5));

//

const numerosEnVariasLineas = () => {
  console.log("Uno"); 
  console.log("Dos"); 
  console.log("Tres") 
}  


numerosEnVariasLineas();

//NO ES RECOMENDABLE USARLO DENTRO DE UN OBJETO

const miAbuela = {
	nombre: "Marta",
	edad: 85,
	chusmear: () => {
		console.log(this)
	} 
}

chusmear(this);

//SE PIERDE LA INFORMACIÓN

//CLASE 22: PROTOTIPOS

//PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

/*
Clases: modelo a seguir.
Objetos: Instancia de la clase.
Atributos: características del objeto.  
Métodos: acciones que el objeto pueda realizar.(por ej: getElementBy..)
*/


const jugador1 = {

	nombre: "Miguel",
	edad: 25,
	arma: "AK-47",
	derribarEnemigo() {
	  console.log("Derribé a mi enemigo");
	} 
  }
  
  const jugador2 = {
  
	nombre: "Damian",
	edad: 27,
	arma: "Magnum",
	derribarEnemigo() {
	  console.log("No derribé a mi enemigo");
	} 
  }
  
  console.log(jugador1);
  jugador1.derribarEnemigo();
  
  console.log(jugador2);
  jugador2.derribarEnemigo();
  
  
  //POO
  
  function Jugador (nombre, arma) {
	
  this.nombre = nombre;
  this.arma = arma;
  
  this.derribarEnemigo = function() {
	  console.log("No lograron cumplir la misión");
	} 
  
  }
  
  const migue = new Jugador ("Miguel","AK-47");
  const dami = new Jugador ("Damian","Magnum");
  
  console.log(migue);
  console.log(dami);


/*
for (var x = 1; x <= 10; x++) {
	console.log(`${x} `.repeat(x).trim());
}

const height = 10;

for (let i = 1; i <= height; i++) {
  // Espacios a la izquierda para centrar la pirámide
  let spaces = " ".repeat(height - i);
  // Repetir "x " i veces y quitar el espacio final
  let xs = "x ".repeat(i).trim();
console.log(spaces + xs);  

*/

/*const height = 0;

for (let i = 10; i >= height; i--) {
  // Espacios a la izquierda para centrar la pirámide
  let spaces = " ".repeat(height + i);
  // Repetir "x " i veces y quitar el espacio final
  let xs = "x".repeat(i).trim();
console.log(spaces + xs);  
}*/

/*const numbers = [ 10 , 20 , 30 , 40 , 50 , 60 , 70];

for (const elements of numbers){
	console.log(elements);
}

try{

let edad = "t"; 


if (!isNaN(edad)){ 
throw new Error("Programas como el orto");
}

console.log(edad++); 
}
 catch(error){
console.log(`Se produjo un error ${error}`);

}*/


//Prototipos:


function Jugador (nombre, arma) {
  
  this.nombre = nombre;
  this.arma = arma;
  
  this.derribarEnemigo = function() {
    console.log("No lograron cumplir la misión");
    } 
  };

  Jugador.prototype.derribarE = function() {
    console.log("Somos soldados de COD");
  };

  Jugador.prototype.saludoE = function(){
    console.log(`Mi nombre es ${this.nombre} y esta es mi arma: ${this.arma}`)
  }

  const migue = new Jugador ("Miguel","AK-47");
   dami = new Jugador ("Damian","Magnum");

  console.log(migue);
  console.log(dami);

  migue.derribarE();
  dami.derribarE();

  migue.saludoE();
  dami.saludoE();

  //Herencia Prototípica:

  function Almirante (nombre, arma, edad){
  	this.admin = Jugador;
  	this.admin = (nombre,arma);
  	this.edad = edad;
  }

Almirante.prototype = new Jugador();
Almirante.prototype.constructor = Almirante;

Almirante.prototype.derribarE = function() {
	console.log("Quiero llegar a una mejor posición")
} 

Almirante.prototype.disparar = function(){
	console.log("Piu piu piu")
}

const migue = new Jugador ("Miguel","AK-47",45);




















