/* let numeros = [2,3,4,5,6,7];
let combinado = [4,"hola",2.7,"andres",true];


let array3 = [numeros, combinado, {edad:32,nombre:"andres"}]

const estudiante = {
    nombre: "andres",
    edad: 25,
    saludo: function(){
        console.log("hola")
    }
}
//esto es un objeto
const auto = {
    modelo: 2023,
    marca: 'Mercedez',
    'costo-beneficio': true //no es recomendable usar este tipo de key(atributo)
}

estudiante.edad=32;

for (const carro of combinado) {
    console.log(carro);
}

for (const poscarro in combinado){
    console.log(poscarro);
}

for (let i=0;i<combinado.length;i++){
    console.log(combinado[i]);
}

let myString = "ANDRES";

console.log(myString.toLowerCase()) */
/* 
const numero = [1,2,3,4,5];

const resultados = numero.map(function (number){
    const resultado = number ** 2;
    return resultado;
})

console.log(resultados); */

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const pares = [];
const impares = [];

numbers.forEach(function (numero){
    if (numero % 2 === 0){
        pares.push(numero);
    } else {
        impares.push(numero);
    }
})

console.log(pares);
console.log(impares);