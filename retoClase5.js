
/* Declara un array que vamos a llamar “estudiantes” con los siguientes valores: 
Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina */

const estudiantes = ["Ana", "Manuela", "Raul", "Carolina", "Maria", "Antonio", "Cristina"];

/* Con un ciclo recorre el array e imprime en consola los 
estudiantes cuyo nombre empiece por ‘A’ */

//for normal
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i][0] == 'A') {
        console.log(estudiantes[i]);
    }
}

//for of
for (const estudiante of estudiantes) {
    if (estudiante[0] == 'A') {
        console.log(estudiante);
    }
}

console.log('+++++++++++++++++')
/* Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo nombre tenga más de 6 letras */

//For normal
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].length >= 6) {
        console.log(estudiantes[i])
    }
}

//For of
for (const studen of estudiantes) {
    if (studen.length >= 6){
        console.log(studen)
    }
}

//RETO OBJETOS

/* Declara un objeto que represente una mascota que tenga los siguientes atributos: 
nombre, tipo de animal, edad, nombre del dueño y juguetes. */

/* El atributo juguetes debe contener un arreglo de valores que hagan referencia a todos los juguetes de la mascota */

const mascota = {
    nombre: "bruno",
    tipo: "perro",
    edad: 3,
    dueño: "andres",
    juguetes: ['pelota', 'lazo', 'hueso']
} 

/*Crea 2 mascotas más */

const mascota2 = {
    nombre: "michi",
    tipo: "gato",
    edad: 4,
    dueño: "maria",
    juguetes: ['bola', 'cuerda', 'raton']
} 

const mascota3 = {
    nombre: "carbon",
    tipo: "perro",
    edad: 5,
    dueño: "luis",
    juguetes: ['disco', 'peluche', 'pelota']
} 

/*Imprime en consola los nombres de las 3 mascotas con el nombre de su
dueño */

const mascotas=[mascota,mascota2,mascota3]

for (let i=0; i<mascotas.length;i++){
    console.log(mascotas[i].nombre+' Es la mascota de '+mascotas[i].dueño)
}
/* 
console.log(mascota.nombre+" Es la mascota de "+mascota.dueño)

console.log(mascota2.nombre+" Es la mascota de "+mascota2.dueño)

console.log(mascota3.nombre+" Es la mascota de "+mascota3.dueño) */

const obj1={
    titulo:"hi",
    paginas:102
}

obj1.paginas=300

obj1.mascota3='rata'
console.log(obj1)

/* Declara un array que tenga los números del 1 al 30, utilizando un método del array */

let numeros = [];

for(let i=0; i<30;i++){
    numeros.push(i+1);
}
console.log(numeros);


/* Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 3 */


function multiplo3(num){
    return num % 3 == 0;
}

let mult3 = numeros.filter(multiplo3);

console.log(mult3)

/*Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 5 */

let mult5 = numeros.filter(multiplos5)

console.log(mult5)

function multiplos5(num){
    if(num%5 == 0){
        return num;
    }
}

/*Debes aplicar un método para crear un nuevo arreglo que contenga el valor de cada número multiplicado por 2 */

let numPor2 = numeros.map(por2)

console.log(numPor2)


function por2(number){
    return number*2
}



/*Declara un array que tenga valores de diferentes tipos de datos, 
y utiliza un método que nos diga si todos los tipos de datos son iguales o no */

//const varios = [2,'nombre', true, {color:'amarillo', tipo:'vehiculo'}]
const varios = [2,5]
/* let mensaje='Tipos de datos iguales';

for (let i=0; i<varios.length-1;i++){
    if(typeof(varios[i])!= typeof(varios[i+1])){
        mensaje = "diferentes tipos de datos"
        break     
    }
}
console.log(mensaje) */

/** */
let igualTipo
igualTipo = varios.every(comp)

function comp(num){
     return typeof varios[0] == typeof num;
}

console.log('es '+igualTipo)



/* const val = [2,3]

let igual = val.every(x=>typeof x[0]==typeof x)

console.log('es ' + igual) */